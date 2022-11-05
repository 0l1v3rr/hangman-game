import { FC, useState } from "react";
import { AiFillGithub, AiOutlineBulb } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { TbHanger } from "react-icons/tb";
import Button from "./buttons/Button";
import LinkButton from "./buttons/LinkButton";

interface NavbarProps {
  hints: number;
  hint: () => void;
  newGame: () => void;
}

const Navbar: FC<NavbarProps> = ({ hints, hint, newGame }) => {
  return (
    <nav className="w-screen flex items-center px-4 gap-3">
      <Button
        onClick={() => hint()}
        icon={AiOutlineBulb}
        text={`Hint (${hints})`}
        disabled={hints <= 0}
      />
      <Button
        onClick={() => {}}
        icon={TbHanger}
        text="Give Up"
        disabled={false}
      />
      <Button
        onClick={() => newGame()}
        icon={BiReset}
        text="New Game"
        disabled={false}
      />

      <div className="ml-auto" />

      <div className="hidden sm:block">
        <LinkButton
          href="https://github.com/0l1v3rr/hangman-game"
          icon={AiFillGithub}
          text="Source Code"
        />
      </div>
    </nav>
  );
};

export default Navbar;
