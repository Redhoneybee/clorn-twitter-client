import React from 'react';
import { HashRouter, Route } from "react-router-dom";

// routes 
import Logout from "../routes/Logout";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Route path="/" exact component={Logout} />
      </HashRouter>
    </div>
  );
}

export default App;
