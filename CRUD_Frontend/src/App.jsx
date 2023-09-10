/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./routes/Auth";
import UnAuth from "./routes/UnAuth";

function App() {
  const [isToken, setIsToken] = useState(null)
useEffect(() => {
  const token = localStorage.getItem('token')
  setIsToken(token)

}, [localStorage.getItem('token')])

  
  return isToken ? <Auth /> : <UnAuth />;
}

export default App;
