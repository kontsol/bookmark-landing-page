import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";
import FAQ from "./components/FAQ";

function App() {
  return (
    <section className="mx-auto container paddingX">
      <Header />
      <Hero />
      <Features />
      <Extension />
      <FAQ />
    </section>
  );
}

export default App;
