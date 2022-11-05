import { useState } from "react";
import Hangman from "./components/game/Hangman";
import KeyboardSection from "./components/game/KeyboardSection";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HangmanGame from "./hangman";

const App = () => {
  const [game, setGame] = useState<HangmanGame>(new HangmanGame());

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-deer bg-cover bg-center pb-4">
      <Header />
      <Navbar />

      <section className="flex flex-col md:flex-row items-start px-4 mt-4 gap-4">
        <Hangman phase={6} />
        <KeyboardSection />
      </section>
    </div>
  );
};

export default App;
