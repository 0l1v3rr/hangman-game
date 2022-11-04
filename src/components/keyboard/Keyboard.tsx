import { FC } from "react";
import Key from "./Key";

interface KeyboardProps {
  word: string;
  guessedLetters: string[];
}

const Keyboard: FC<KeyboardProps> = (props) => {
  // this function determines the status of the letter
  const detectStatus = (letter: string): "default" | "wrong" | "correct" => {
    // if the letter has been guessed
    if (props.guessedLetters.includes(letter)) {
      // if the letter is correct
      if (props.word.includes(letter)) {
        return "correct";
      }

      // if the letter is not correct
      return "wrong";
    }

    // if the letter hasn't been guessed
    return "default";
  };

  return (
    <div className="p-4 bg-slate-300 bg-opacity-70 mt-4 rounded-sm shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <Key letter="a" status={detectStatus("a")} />
        <Key letter="b" status={detectStatus("b")} />
        <Key letter="c" status={detectStatus("c")} />
        <Key letter="d" status={detectStatus("d")} />
        <Key letter="e" status={detectStatus("e")} />
        <Key letter="f" status={detectStatus("f")} />
        <Key letter="g" status={detectStatus("g")} />
        <Key letter="h" status={detectStatus("h")} />
        <Key letter="i" status={detectStatus("i")} />
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <Key letter="j" status={detectStatus("j")} />
        <Key letter="k" status={detectStatus("k")} />
        <Key letter="l" status={detectStatus("l")} />
        <Key letter="m" status={detectStatus("m")} />
        <Key letter="n" status={detectStatus("n")} />
        <Key letter="o" status={detectStatus("o")} />
        <Key letter="p" status={detectStatus("p")} />
        <Key letter="q" status={detectStatus("q")} />
        <Key letter="r" status={detectStatus("r")} />
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <Key letter="s" status={detectStatus("s")} />
        <Key letter="t" status={detectStatus("t")} />
        <Key letter="u" status={detectStatus("u")} />
        <Key letter="v" status={detectStatus("v")} />
        <Key letter="w" status={detectStatus("w")} />
        <Key letter="x" status={detectStatus("x")} />
        <Key letter="y" status={detectStatus("y")} />
        <Key letter="z" status={detectStatus("z")} />
      </div>
    </div>
  );
};

export default Keyboard;
