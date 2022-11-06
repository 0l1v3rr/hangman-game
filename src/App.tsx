import { useCallback, useRef, useState } from "react";
import Hangman from "./components/game/Hangman";
import KeyboardSection from "./components/game/KeyboardSection";
import Header from "./components/Header";
import { useForceRerender } from "./components/hooks/useForceRerender";
import Navbar from "./components/Navbar";
import HangmanGame from "./hangman";
import words from "./words.json";

const getRandomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const forceRerender = useForceRerender();

  const [hints, setHints] = useState<number>(3);
  const [game, setGame] = useState<HangmanGame>(
    new HangmanGame(getRandomWord())
  );

  const guessLetter = useCallback(
    (letter: string): void => {
      if (game.phase >= 6) {
        return;
      }

      if (game.isGuessed()) {
        return;
      }

      game.guessLetter(letter);
      forceRerender();
    },
    [game]
  );

  const useHint = useCallback(() => {
    if (hints < 1) {
      return;
    }

    setHints((prev) => prev - 1);
    game.hint();
  }, [game, hints]);

  const newGame = useCallback(() => {
    if (game.isGuessed()) {
      setHints((prev) => prev + 1);
    }

    setGame(new HangmanGame(getRandomWord()));
  }, [game]);

  const giveUp = useCallback(() => {
    if (game.isGuessed()) {
      return;
    }

    game.giveUp();
    forceRerender();
  }, [game]);

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-deer bg-cover bg-center pb-4">
      <Header />
      <Navbar hints={hints} hint={useHint} newGame={newGame} giveUp={giveUp} />

      <section className="flex flex-col md:flex-row items-start px-4 mt-4 gap-4">
        <Hangman phase={game.phase} />
        <KeyboardSection
          word={game.word}
          guessedLetters={game.guessedLetters}
          guessLetter={guessLetter}
        />
      </section>
    </div>
  );
};

export default App;
