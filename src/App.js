
import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './layout/Layout';
import Reservations from './layout/Reservations';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/menu" element={<h1>Menu</h1>} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
