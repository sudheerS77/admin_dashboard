import React from "react";

//Icons
import { BsThreeDots } from "react-icons/bs";

const IncomeCard = () => {
  return (
    <>
      <div className="w-[100%] bg-white shadow-sm rounded-sm border border-gray-100 px-6 py-3 space-y-2">
        <div className="flex items-center justify-between">
          <h6 className="text-sm text-gray-400">Total Income</h6>
          <BsThreeDots className="text-gray-400 w-5 h-5" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <h1 className="text-4xl font-semibold">$124,563.00</h1>
            <span className="bg-[#059668cd] text-white p-1 rounded-xl text-xs">
              +6.9%
            </span>
          </div>
          <div className="w-full h-1 bg-gray-300">
            <div className="w-[40%] h-full bg-[#0027b3]" />
          </div>
          <p className="text-xs text-gray-300">Yearly Goal</p>
        </div>
      </div>
    </>
  );
};

export default IncomeCard;
