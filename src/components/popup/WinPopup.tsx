import { FC } from "react";
import { BiReset } from "react-icons/bi";

interface WinPopupProps {
  isActive: boolean;
  closePopup: () => void;
  newGame: () => void;
}

const WinPopup: FC<WinPopupProps> = (props) => {
  const activeClasses = "opacity-100 pointer-events-auto scale-100";
  const inactiveClasses = "opacity-0 pointer-events-none scale-0";

  const newGame = () => {
    props.closePopup();
    props.newGame();
  };

  return (
    <div
      className={`rounded-md bg-slate-400 border border-solid border-slate-500
        shadow-lg left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 select-none
        transition-all duration-300 fixed top-1/2 max-h-[95vh] overflow-y-auto w-[90%] 
        sm:w-[80%] md:w-[50%] lg:w-[40%] ${
          props.isActive ? activeClasses : inactiveClasses
        }`}
    >
      <div className="px-4 pt-2 font-semibold text-center text-slate-900 text-xl">
        Congrats!
      </div>

      <div
        className="px-4 py-2 bg-slate-300 m-2 rounded-sm 
          text-slate-800 bg-opacity-70 shadow-lg"
      >
        You have successfully guessed the word! <br />
        Your reward is <span className="font-semibold">+1</span> hint.
      </div>

      <div className="px-2 pb-2">
        <button
          type="button"
          onClick={newGame}
          className="flex items-center justify-center gap-1 bg-indigo-600
            text-slate-200 px-3 py-1 rounded-md transition-all duration-200 hover:text-white
            hover:shadow-sm border border-solid border-transparent border-indigo-700
            hover:border-indigo-800 focus:border-indigo-800 text-sm"
        >
          <BiReset />
          <span>New Game</span>
        </button>
      </div>
    </div>
  );
};

export default WinPopup;
