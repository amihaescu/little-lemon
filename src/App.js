
import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/menu" element={<h1>Menu</h1>} />
          <Route path="/reservations" element={<h1>Reservations</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
