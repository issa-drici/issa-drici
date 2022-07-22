
import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Accueil from "./pages/accueil/Accueil";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Accueil />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
  );
};

export default Routes;
