import { GiSwordman } from "react-icons/gi";

const Header = () => {
  return (
    <header className="w-screen px-5 py-3 bg-slate-800 bg-opacity-80 mb-2">
      <div className="flex items-center gap-2 text-xl font-semibold text-slate-50">
        <GiSwordman />
        <span>Hangman</span>
      </div>
    </header>
  );
};

export default Header;
