import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Header, Footer, Plan, Reviews, ShowPlan } from "./components";

function App() {
  return (
    <>
      <Header />
      <Plan />
      <ShowPlan />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
