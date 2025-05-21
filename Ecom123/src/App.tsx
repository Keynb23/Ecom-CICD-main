import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProductsPage from "./pages/products/Products";
import ProductView from "./pages/products/ProductView";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { Cart } from "./components/cart/Cart";
import { LogRegPage } from "./pages/profile/LogRegPage";

const App = () => {
  const { authState } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login-register" element={<LogRegPage />} />
      </Routes>
      {authState.user && (
        <div className="welcome-message">
          <h2>Welcome, {authState.user.email}</h2>
        </div>
      )}
    </>
  );
};

export default App;
