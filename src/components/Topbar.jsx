import Logo from "/ollyo.jpg";
import SourceCode from "../assets/icons/SourceCode";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img className="w-14 rounded-xl" src={Logo} alt="Ollyo Logo" />
        <h3 className="font-bold text-gray-700">
          <span> Ollyo Task - </span>
          <a
            className="text-emerald-400 underline"
            href="https://www.myselfrakib.com"
            target="_blank"
          >
            Rakib
          </a>
        </h3>
      </div>

      <a
        className="flex gap-2 items-center bg-gradient-to-r text-xs from-cyan-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg font-semibold border border-black/10"
        href="https://github.com/mohammedrakib944/drag-and-drop"
        target="_blank"
      >
        <SourceCode /> Source Code
      </a>
    </div>
  );
};

export default Topbar;
