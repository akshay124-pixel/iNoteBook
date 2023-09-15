import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./comoponents/Home";
import Navbar from "./comoponents/Navbar";
import About from "./comoponents/About";
import NoteState from "./context/NoteState";

import AlertDismiss from "./comoponents/AlertDismiss";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <AlertDismiss message="This is amazing React App" />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
