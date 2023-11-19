import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My test site</h1>
        <NavBar />
        <div id="page-body">
          <p>top</p>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
          <p>bottom</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
