import React from "react";
import { BiChevronDown } from "react-icons/bi";

//Icons
import { BsThreeDots } from "react-icons/bs";
import BalanceGraph from "../charts/balanceGraph";

const BalanceCard = () => {
  return (
    <>
      <div className="w-[100%] bg-white shadow-sm rounded-sm border border-gray-100 px-6 py-3 space-y-2">
        <div className="flex items-center justify-between border-b pb-4">
          <h6 className="text-xl font-bold text-gray-800">Balance</h6>
          <div className="flex items-center gap-2 text-sm font-normal text-gray-400 border border-gray-300 rounded-sm p-1.5">
            Monthly
            <BiChevronDown />
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-5 pt-4">
          <div className="max-w-[50%] overflow-hidden space-y-2 border border-gray-300 px-4 py-2 rounded-sm">
            <div className="flex items-end gap-1">
              <div>
                <p className="text-xs text-gray-400">Earnings</p>
                <h1 className="text-xl xl:text-4xl font-semibold">43.1%</h1>
              </div>
              <span className="bg-[#059668cd] text-white p-1 rounded-xl text-xs">
                +2.5%
              </span>
            </div>
          </div>
          <div className="max-w-[50%] overflow-hidden space-y-2 border border-gray-300 px-4 py-2 rounded-sm">
            <div className="flex items-end gap-1">
              <div>
                <p className="text-xs text-gray-400">Sales Value</p>
                <h1 className="text-xl xl:text-4xl font-semibold">$95,422</h1>
              </div>
              <span className="bg-[#059668cd] text-white p-1 rounded-xl text-xs">
                +13.5%
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <BalanceGraph />
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
