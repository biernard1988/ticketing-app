import { FaFire } from "react-icons/fa6";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FaFire
        className={` pr-1 ${priority > 1 ? "text-red-400" : "text-slate-400"}`}
      />
      <FaFire
        className={` pr-1 ${priority > 2 ? "text-red-400" : "text-slate-400"}`}
      />
      <FaFire
        className={` pr-1 ${priority > 3 ? "text-red-400" : "text-slate-400"}`}
      />
      <FaFire
        className={` pr-1 ${priority > 4 ? "text-red-400" : "text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
