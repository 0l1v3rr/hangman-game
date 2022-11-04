import { FC } from "react";

interface WordProps {
  word: string;
  guessedLetters: string[];
}

const Word: FC<WordProps> = (props) => {
  return (
    <div
      className="p-2 bg-slate-300 bg-opacity-70 mt-2 rounded-sm 
        shadow-lg text-4xl flex items-center justify-center gap-2
         uppercase select-none font-semibold"
    >
      {props.word.split("").map((letter) => (
        <div key={`${letter}-${Math.random()}`} className="underline">
          {props.guessedLetters.includes(letter) ? letter : "_"}
        </div>
      ))}
    </div>
  );
};

export default Word;
