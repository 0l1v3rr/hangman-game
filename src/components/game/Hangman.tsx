import { FC } from "react";

interface HangmanProps {
  phase: number;
}

const Hangman: FC<HangmanProps> = (props) => {
  return (
    <aside className="bg-slate-400 w-full md:w-1/3 rounded-sm shadow-sm px-4 py-2 bg-opacity-85">
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold text-zinc-900">Me, Myself & I</div>
        <div className="text-zinc-900 italic">{props.phase}/6</div>
      </div>

      <div className="p-4 bg-slate-300 bg-opacity-70 mt-2 rounded-sm shadow-lg">
        this is the hangman!!
      </div>
    </aside>
  );
};

export default Hangman;
