import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import NotFoundPage from "../components/NotFoundPage";
import HeroSection from "../components/HeroSection";

const UnAuth = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default UnAuth;
