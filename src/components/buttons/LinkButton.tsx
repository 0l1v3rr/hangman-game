import { FC } from "react";
import { IconType } from "react-icons";

interface LinkButtonProps {
  href: string;
  icon: IconType;
  text: string;
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className="flex items-center justify-center gap-1 bg-slate-800 bg-opacity-30
        text-slate-300 px-3 py-2 rounded-md transition-all duration-200 hover:text-slate-100 
        hover:shadow-sm disabled:text-slate-400 border border-solid border-transparent 
        hover:border-slate-500/[.4] focus:border-slate-500/[.4]"
    >
      <props.icon />
      <span>{props.text}</span>
    </a>
  );
};

export default LinkButton;
