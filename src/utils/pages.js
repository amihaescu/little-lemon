const pages = new Map();

pages.set('home', { name : 'Home', path: '/' , anchorable: true });
pages.set('about', { name : 'About', path: '/about' , anchorable: true });
pages.set('menu', { name : 'Menu', path: '/menu' , anchorable: true });
pages.set('reservations', { name : 'Reservations', path: '/reservations' , anchorable: true });
pages.set('reservationConfirmed', { name : 'Reservation Confirmed', path: '/reservationConfirmed' , anchorable: false });
pages.set('order', { name : 'Order', path: '/order' , anchorable: true });
pages.set('login', { name : 'Login', path: '/login' , anchorable: false });

export default pages;
