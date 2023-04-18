import React from "react";
import "./App.css";
import { Header, Footer, Plan, Reviews, ShowPlan } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Plan />
      <ShowPlan />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
