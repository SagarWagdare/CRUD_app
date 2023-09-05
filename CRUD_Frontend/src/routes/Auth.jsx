import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import CreatePage from "../components/CreatePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const Auth = () => {
  return (
    <>
    
    <Header/>
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-user" element={<CreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  );
};

export default Auth;
