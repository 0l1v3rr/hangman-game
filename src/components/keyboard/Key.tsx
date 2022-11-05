import { FC } from "react";

interface KeyProps {
  letter: string;
  status: "correct" | "wrong" | "default";
  guessLetter: (letter: string) => void;
}

const Key: FC<KeyProps> = (props) => {
  return (
    <button
      type="button"
      onClick={() => props.guessLetter(props.letter)}
      disabled={props.status === "correct" || props.status === "wrong"}
      className={`px-3 py-2 border border-solid uppercase leading-none text-lg
        font-semibold rounded-sm shadow-md transition-all duration-200 text-slate-900
        ${
          props.status === "default" &&
          "border-slate-500 hover:border-slate-700 bg-slate-400"
        }
        ${props.status === "correct" && "border-green-600 bg-green-500"}
        ${props.status === "wrong" && "border-red-600 bg-red-500 text-red-50"}`}
    >
      {props.letter}
    </button>
  );
};

export default Key;
