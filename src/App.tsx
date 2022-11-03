import Hangman from "./components/game/Hangman";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-deer bg-cover bg-center pb-4">
      <Header />
      <Navbar />

      <section className="flex flex-col md:flex-row items-start px-4 mt-4 gap-4">
        <Hangman phase={2} />
        <div className="bg-slate-500">asds</div>
      </section>
    </div>
  );
};

export default App;
