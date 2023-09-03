import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AppLayout from "./pages/AppLayout";
import './styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
