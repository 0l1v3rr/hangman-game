import { FC } from "react";

interface HangmanProps {
  phase: number;
}

const Hangman: FC<HangmanProps> = (props) => {
  return (
    <aside className="bg-slate-400 w-full md:w-1/3 rounded-sm shadow-sm px-4 pt-2 pb-4 bg-opacity-85">
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold text-zinc-900">Me, Myself & I</div>
        <div className="text-zinc-900 italic">{props.phase}/6</div>
      </div>

      <div
        className="p-6 bg-slate-300 bg-opacity-70 mt-2 rounded-sm shadow-lg 
          relative flex items-center justify-center flex-col"
      >
        <div className="bg-zinc-800 w-2/3 h-3 rounded-sm mb-72" />
        <div className="absolute bg-zinc-800 w-3 h-72 left-[76%]" />
        <div className="bg-zinc-800 w-full h-3 rounded-sm" />
      </div>
    </aside>
  );
};

export default Hangman;
