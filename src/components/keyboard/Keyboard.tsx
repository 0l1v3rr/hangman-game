import { FC } from "react";
import Key from "./Key";

interface KeyboardProps {
  word: string;
  guessedLetters: string[];
  guessLetter: (letter: string) => void;
  disableButtons: () => boolean;
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
        disabled={props.disableButtons()}
      />
      <Key
        letter="b"
        status={detectStatus("b")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="c"
        status={detectStatus("c")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="d"
        status={detectStatus("d")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="e"
        status={detectStatus("e")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="f"
        status={detectStatus("f")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="g"
        status={detectStatus("g")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="h"
        status={detectStatus("h")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="i"
        status={detectStatus("i")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="j"
        status={detectStatus("j")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="k"
        status={detectStatus("k")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="l"
        status={detectStatus("l")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="m"
        status={detectStatus("m")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="n"
        status={detectStatus("n")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="o"
        status={detectStatus("o")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="p"
        status={detectStatus("p")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="q"
        status={detectStatus("q")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="r"
        status={detectStatus("r")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="s"
        status={detectStatus("s")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="t"
        status={detectStatus("t")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="u"
        status={detectStatus("u")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="v"
        status={detectStatus("v")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="w"
        status={detectStatus("w")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="x"
        status={detectStatus("x")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="y"
        status={detectStatus("y")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
      <Key
        letter="z"
        status={detectStatus("z")}
        guessLetter={props.guessLetter}
        disabled={props.disableButtons()}
      />
    </div>
  );
};

export default Keyboard;
