import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter ,
  Route,
  // BrowserRouter,
  Routes,
  // Link
} from "react-router-dom";

function App() {

  //-------------------- Enabling Darkmode function of Navbar -------------
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextEditor- Dark mode"; //Changing the favicon title for dark mode
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextEditor- Light mode"; //Changing the favicon title for light mode

    }
  }
  //---------------------------- End of Dark mode --------------------------

  return (
    <>
      <BrowserRouter>
        <Navbar home="Home" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/about' element={<About mode={mode}/>}/>
            <Route path='/' element={<Textform showAlert={showAlert} heading="TextEditor - Play with your text" mode={mode} />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;