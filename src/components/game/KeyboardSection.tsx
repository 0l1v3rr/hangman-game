import Keyboard from "../keyboard/Keyboard";
import Word from "./Word";

const KeyboardSection = () => {
  const word = "apple";
  const guessedLetters = ["p", "e", "x", "o"];

  return (
    <section className="bg-slate-400 w-full md:w-2/3 rounded-sm shadow-sm px-4 pt-2 pb-4 bg-opacity-85">
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold text-zinc-900">The word</div>
        <div className="text-zinc-800">
          {guessedLetters.length}/{word.length}
        </div>
      </div>

      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard word={word} guessedLetters={guessedLetters} />
    </section>
  );
};

export default KeyboardSection;
