import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import CreatePage from "../components/CreatePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  return (
    <>
    
    <Header/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-user" element={<CreatePage />} />
    </Routes>
    </>
  );
};

export default Auth;
