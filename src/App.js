import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./comoponents/Home";
import Navbar from "./comoponents/Navbar";
import About from "./comoponents/About";
import NoteState from "./context/NoteState";
import Login from "./comoponents/Login";
import Signup from "./comoponents/Signup";
import Alert from "./comoponents/Alert";
import { useState } from "react";
function App() {
  const [Alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Welcome to iNoteBook" />
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
