import { useState } from 'react'

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }
      , 1000);
  }
  const toggleMode = (modes) => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33, 37, 41)';
      showAlert('Dark Mode has been Enabled', 'success');
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark Mode has been Disabled', 'success');
    }
    console.log(mode + " from app " + modes)
  }
  return (
    <>
     <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About /> } />
            <Route path="/" element={ <TextForm showAlert={showAlert}heading="Enter Text to Analyze" mode={mode} toggleMode={toggleMode} />} />
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
