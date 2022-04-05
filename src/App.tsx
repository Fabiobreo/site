import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Home from "./components/pages/Home";
import Skills from "./components/pages/skills/Skills";
import Experiences from "./components/pages/experiences/Experiences";
import Educations from "./components/pages/educations/Educations";
import Portfolios from "./components/pages/portfolios/Portfolios";
import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import PageLayout from "./components/PageLayout/PageLayout";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/site/" element={<Home />} />
        <Route
          path="/skills"
          element={
            <div className="container">
              <Skills />
            </div>
          }
        />
        <Route
          path="/experiences"
          element={
            <div className="container">
              <Experiences />
            </div>
          }
        />
        <Route
          path="/educations"
          element={
            <div className="container">
              <Educations />
            </div>
          }
        />
        <Route
          path="/portfolios"
          element={
            <div className="container">
              <Portfolios />
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/site/" replace />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
