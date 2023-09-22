import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./comoponents/Home";
import Navbar from "./comoponents/Navbar";
import About from "./comoponents/About";
import NoteState from "./context/NoteState";
import Login from "./comoponents/Login";
import Signup from "./comoponents/Signup";
import AlertDismiss from "./comoponents/AlertDismiss";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <AlertDismiss message="Welcome to iNoteBook" />
              <Home />
            </Route>
            <Route exact path="/about">
              <AlertDismiss message=" About Open Succesfully... " />
              <About />
            </Route>
            <Route exact path="/login">
              <AlertDismiss message="Login Open Successfully " />
              <Login />
            </Route>
            <Route exact path="/signup">
              <AlertDismiss message="SignUp Open Successfully " />
              <Signup />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
