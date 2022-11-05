import { FC } from "react";
import Keyboard from "../keyboard/Keyboard";
import Word from "./Word";

interface KeyboardSectionProps {
  word: string;
  guessedLetters: string[];
  guessLetter: (letter: string) => void;
}

const KeyboardSection: FC<KeyboardSectionProps> = ({
  guessedLetters,
  word,
  guessLetter,
}) => {
  return (
    <section className="bg-slate-400 w-full md:w-2/3 rounded-sm shadow-sm px-4 pt-2 pb-4 bg-opacity-85">
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold text-zinc-900">The word</div>
        <div className="text-zinc-800">
          {guessedLetters.length}/{word.length}
        </div>
      </div>

      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard
        word={word}
        guessedLetters={guessedLetters}
        guessLetter={guessLetter}
      />
    </section>
  );
};

export default KeyboardSection;
