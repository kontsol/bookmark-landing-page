import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";

function App() {
  return (
    <section className="mx-auto container paddingX">
      <Header />
      <Hero />
      <Features />
      <Extension />
    </section>
  );
}

export default App;
