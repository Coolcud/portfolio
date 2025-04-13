import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-300 text-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
