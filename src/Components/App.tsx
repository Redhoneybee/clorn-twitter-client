import React from 'react';
import { HashRouter, Route } from "react-router-dom";

// routes 
import Logout from "../routes/Logout";
import Login from "../routes/Login";
import Signup from "../routes/Signup";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Route path="/" exact component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </HashRouter>
    </div>
  );
}

export default App;
