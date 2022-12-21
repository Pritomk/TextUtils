import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/screens/TextForm";
import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  useEffect(()=> {
	document.title = "Text Utilities - Home"
  },[])

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00004d";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <NavBar text="Navbar" toggle={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <TextForm mode={mode} alertHandle={showAlert} />
    </>
  );
}

export default App;
