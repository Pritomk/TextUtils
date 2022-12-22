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

  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#00004d";
      showAlert("Dark mode enabled", "success");
    } else if (mode === "blue") {
      document.body.style.backgroundColor = "#002080";
      showAlert("Blue mode enabled", "success");
    } else if (mode === "red") {
      document.body.style.backgroundColor = "#b30000";
      showAlert("Blue mode enabled", "success");
    } else if (mode === "green") {
      document.body.style.backgroundColor = "#33cc00";
      showAlert("Blue mode enabled", "success");
    } else if (mode === "light") {
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode enabled", "success");
    }

    setTimeout(()=>{
      setMode("light");
    },10000)

  }, [mode])

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
  };

  return (
    <>
      <NavBar text="Navbar" toggle={toggleMode} mode={mode} setMode={setMode}/>
      <Alert alert={alert} />
      <TextForm mode={mode} alertHandle={showAlert} />
    </>
  );
}

export default App;
