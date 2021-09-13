import Navbar from './components/Navbar.js';
import './components/App.css';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable dark mode')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setText('Disable dark mode')
      // document.body.style.borderBlockColor = '2px solid black'
      document.body.style.backgroundColor = '#02042e';

      showAlert('Dark Mode has been enabled', 'Success')
    }
    else {
      setMode('light');
      setText('Enable dark mode')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'Success')
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" abouttext="About Text" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <Switch>
          <>
          <div className="container my-3">
            <Route exact path="/About">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading='Enter the Text below to analyse' mode={mode} />
            </Route>

          </div>
          </>
        </Switch>
      </Router>
    </>
  );
}

export default App;
