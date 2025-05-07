import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <section className="mx-auto container paddingX">
      <Header />
      <Hero />
      <Features />
    </section>
  );
}

export default App;
