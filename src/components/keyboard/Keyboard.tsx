import { FC } from "react";
import Key from "./Key";

interface KeyboardProps {
  word: string;
  guessedLetters: string[];
  guessLetter: (letter: string) => void;
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
    <div
      className="p-4 sm:p-6 bg-slate-300 bg-opacity-70 mt-4 rounded-sm 
        shadow-lg grid grid-cols-6 sm:grid-cols-9 gap-2"
    >
      <Key
        letter="a"
        status={detectStatus("a")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="b"
        status={detectStatus("b")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="c"
        status={detectStatus("c")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="d"
        status={detectStatus("d")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="e"
        status={detectStatus("e")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="f"
        status={detectStatus("f")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="g"
        status={detectStatus("g")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="h"
        status={detectStatus("h")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="i"
        status={detectStatus("i")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="j"
        status={detectStatus("j")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="k"
        status={detectStatus("k")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="l"
        status={detectStatus("l")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="m"
        status={detectStatus("m")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="n"
        status={detectStatus("n")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="o"
        status={detectStatus("o")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="p"
        status={detectStatus("p")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="q"
        status={detectStatus("q")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="r"
        status={detectStatus("r")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="s"
        status={detectStatus("s")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="t"
        status={detectStatus("t")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="u"
        status={detectStatus("u")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="v"
        status={detectStatus("v")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="w"
        status={detectStatus("w")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="x"
        status={detectStatus("x")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="y"
        status={detectStatus("y")}
        guessLetter={props.guessLetter}
      />
      <Key
        letter="z"
        status={detectStatus("z")}
        guessLetter={props.guessLetter}
      />
    </div>
  );
};

export default Keyboard;
