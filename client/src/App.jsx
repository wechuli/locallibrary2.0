import React, { useState } from "react";
import Header from "./components/layout/Header";
import {Route} from 'react-router-dom';
import UserDashboard from "./components/dashboard/UserDashboard";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <UserDashboard/>
    </React.Fragment>
  );
};

export default App;
