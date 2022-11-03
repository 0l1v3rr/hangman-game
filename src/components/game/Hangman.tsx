import { FC } from "react";

interface HangmanProps {
  phase: number;
}

const Hangman: FC<HangmanProps> = ({ phase }) => {
  return (
    <aside className="bg-slate-400 w-full md:w-1/3 rounded-sm shadow-sm px-4 pt-2 pb-4 bg-opacity-85">
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold text-zinc-900">Me, Myself & I</div>
        <div className="text-zinc-800 italic">{phase}/6</div>
      </div>

      <div
        className="p-6 bg-slate-300 bg-opacity-70 mt-2 rounded-sm shadow-lg 
          relative flex items-center justify-center flex-col"
      >
        {/* frame */}
        <div className="bg-zinc-800 w-52 h-3 rounded-sm rounded-br-none" />
        <div className="bg-zinc-800 w-3 h-72 ml-[12.25rem]" />
        <div className="bg-zinc-800 w-72 h-3 rounded-sm" />
        <div className="absolute bg-zinc-800 w-2 h-12 rotate-[135deg] top-6 ml-40" />
        <div className="absolute bg-zinc-800 w-2 h-10 top-6" />

        {/* hangman itself */}
        {phase > 0 && (
          <div className="absolute w-12 h-12 top-14 border-8 border-solid border-zinc-800 rounded-full" />
        )}

        {phase > 1 && <div className="absolute bg-zinc-800 w-2 h-24 top-24" />}

        {phase > 2 && (
          <div className="absolute bg-zinc-800 w-2 h-14 rotate-[135deg] top-24 ml-10" />
        )}

        {phase > 3 && (
          <div className="absolute bg-zinc-800 w-2 h-14 rotate-45 top-24 -ml-10" />
        )}

        {phase > 4 && (
          <div className="absolute bg-zinc-800 w-2 h-16 rotate-[135deg] top-[11.25rem] ml-10" />
        )}

        {phase > 5 && (
          <div className="absolute bg-zinc-800 w-2 h-16 rotate-45 top-[11.25rem] -ml-10" />
        )}
      </div>
    </aside>
  );
};

export default Hangman;
