import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <section className="mx-auto container paddingX">
      <Header />
      <Hero />
    </section>
  );
}

export default App;
