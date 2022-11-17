import { useCallback, useState } from "react";
import Hangman from "./components/game/Hangman";
import KeyboardSection from "./components/game/KeyboardSection";
import Header from "./components/Header";
import { useForceRerender } from "./components/hooks/useForceRerender";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import Navbar from "./components/Navbar";
import BlurOverlay from "./components/popup/BlurOverlay";
import LosePopup from "./components/popup/LosePopup";
import WinPopup from "./components/popup/WinPopup";
import HangmanGame from "./hangman";
import words from "./words.json";

const getRandomWord = (): string =>
  words[Math.floor(Math.random() * words.length)];

const App = () => {
  const forceRerender = useForceRerender();

  const [isWinPopupOpen, setWinPopupOpen] = useState<boolean>(false);
  const [isLosePopupOpen, setLosePopupOpen] = useState<boolean>(false);

  const [hints, setHints] = useLocalStorage<number>("hints", 3);
  const [game, setGame] = useState<HangmanGame>(
    new HangmanGame(getRandomWord())
  );

  const guessLetter = useCallback(
    (letter: string): void => {
      if (game.phase >= 7 || game.isGuessed()) {
        return;
      }

      game.guessLetter(letter);

      if (game.phase >= 7 && !game.isGuessed()) {
        setLosePopupOpen(true);
      }

      if (game.isGuessed()) {
        setHints((prev: any) => prev + 1);
        setWinPopupOpen(true);
        return;
      }

      forceRerender();
    },
    [game]
  );

  const useHint = useCallback(() => {
    if (hints < 1) {
      return;
    }

    setHints((prev: any) => prev - 1);
    game.hint();
  }, [game, hints]);

  const newGame = useCallback(() => {
    setGame(new HangmanGame(getRandomWord()));
  }, [game]);

  const giveUp = useCallback(() => {
    if (game.isGuessed()) {
      return;
    }

    game.giveUp();
    forceRerender();
  }, [game]);

  const disableButtons = (): boolean => game.phase >= 7 || game.isGuessed();

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-deer bg-cover bg-center pb-4">
      <BlurOverlay isActive={isWinPopupOpen || isLosePopupOpen} />

      <WinPopup
        isActive={isWinPopupOpen}
        closePopup={() => setWinPopupOpen(false)}
        newGame={newGame}
      />

      <LosePopup
        isActive={isLosePopupOpen}
        closePopup={() => setLosePopupOpen(false)}
        newGame={newGame}
      />

      <Header />
      <Navbar hints={hints} hint={useHint} newGame={newGame} giveUp={giveUp} />

      <section className="flex flex-col md:flex-row items-start px-4 mt-4 gap-4">
        <Hangman phase={game.phase} />
        <KeyboardSection
          word={game.word}
          guessedLetters={game.guessedLetters}
          guessLetter={guessLetter}
          disableButtons={disableButtons}
        />
      </section>
    </div>
  );
};

export default App;
