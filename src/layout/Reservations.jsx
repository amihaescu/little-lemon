import { Formik, Form, Field } from 'formik';
import { submitAPI, fetchAPI } from '../utils/api';
import { useEffect, useState } from 'react';
export default function Reservations() {

    const [availableTimes, setAvailableTimes] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
    });

    // Initial values for the form
    let resetValues = {
        date: '',
        time: '',
        guests: 1,
        occasion: '',
    };

    function handleDateChange(date) {
        console.log('Selected date:', date.target.value);
        var availableTimes = fetchAPI(new Date(date.target.value))
        setAvailableTimes(availableTimes);
        console.log('Available times:', availableTimes);
    }



    function validateDate(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (new Date(value) < new Date()) {
            error = 'Date cannot be in the past';
        }
        return error;
    }

    function validateTime(value) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }

    function validateGuests(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value < 1 || value > 10) {
            error = 'Number of guests must be between 1 and 10';
        }
        return error;
    }
    function validateOccasion(value) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }

    function handleSubmit(values, actions) {
        console.log('Form data:', values);
        submitAPI();
        alert('Reservation submitted!');
        actions.resetForm(resetValues);

    }

    return (
        <main>
            <h3>Reservations</h3>
            <Formik
                initialValues={resetValues}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values }) => (
                    <Form style={{
                        display: 'grid',
                        maxWidth: 200,
                        gap: 20,
                    }}>
                        <label htmlFor="date">Choose date</label>
                        <Field type="date" id="date" name="date" value={values.date} onBlur={handleDateChange} validate={validateDate} />
                        {errors.date && touched.date && <div style={{ color: 'red' }}>{errors.date}</div>}

                        <label htmlFor="time">Choose time</label>
                        <Field as="select" id="time" name="time" validate={validateTime}>
                            <option value="">Select time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </Field>
                        {errors.time && touched.time && <div style={{ color: 'red' }}>{errors.time}</div>}

                        <label htmlFor="guests">Number of guests</label>
                        <Field type="number" id="guests" name="guests" validate={validateGuests} />
                        {errors.guests && touched.guests && <div style={{ color: 'red' }}>{errors.guests}</div>}

                        <label htmlFor="occasion">Occasion</label>
                        <Field as="select" id="occasion" name="occasion" validate={validateOccasion}>
                            <option value="">Select occasion</option>
                            {['Birthday', 'Anniversary', 'Other'].map((occasion) => (
                                <option key={occasion} value={occasion}>{occasion}</option>
                            ))}
                        </Field>
                        {errors.occasion && touched.occasion && <div style={{ color: 'red' }}>{errors.occasion}</div>}

                        <button type="submit">Make Your Reservation</button>
                    </Form>
                )}
            </Formik>
        </main>
    );
}