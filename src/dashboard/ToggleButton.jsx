import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid } from "react-icons/bs";
import { useState } from "react";

const ToggleButton = () => {
  const [selected, setSelected] = useState("menu");
  return (
    <div className="inline-flex rounded-lg border border-gray-300 p-1">
      <button
        onClick={() => setSelected("menu")}
        className={`inline-flex cursor-pointer justify-center items-center p-2.5 ${
          selected === "menu" ? "bg-gray-200 rounded-lg" : ""
        }`}
      >
        <TfiMenuAlt size={18} />
      </button>
      <button
        onClick={() => setSelected("grid")}
        className={`inline-flex cursor-pointer justify-center items-center p-2.5 ${
          selected === "grid" ? "bg-gray-200" : ""
        }`}
      >
        <BsGrid size={18} />
      </button>
    </div>
  );
};

export default ToggleButton;
