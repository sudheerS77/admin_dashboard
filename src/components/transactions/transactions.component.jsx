import React from "react";
import { Link, useParams } from "react-router-dom";

//Icons
import { BiExport } from "react-icons/bi";

//Components
import InvoiceTable from "../Tables/invoiceTable";
import IncomingTable from "../Tables/incomingTable";
const Transactions = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <>
      <div className="w-full mt-14 p-6 bg-white">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold taxt-gray-800">
            Recent Transactions
          </h4>
          <button className="bg-blue-800 text-sm font-normal text-gray-50 px-2 py-1 rounded-sm flex items-center gap-1">
            <BiExport className="w-4 h-4" />
            Export
          </button>
        </div>
        <div className="pt-5">
          <div className="space-x-4 border-b-2 pb-1 mb-5">
            <Link to="/">
              <span
                className={`text-md font-bold ${
                  type !== "invoices"
                    ? "pb-1 text-blue-900 border-b-4 border-blue-900"
                    : ""
                }`}
              >
                Incoming
              </span>
            </Link>
            <Link to="/invoices">
              <span
                className={`text-md font-bold ${
                  type === "invoices"
                    ? "pb-1 text-blue-900 border-b-4 border-blue-900"
                    : ""
                }`}
              >
                Invoices
              </span>
            </Link>
          </div>
          {type === "invoices" ? <InvoiceTable /> : <IncomingTable />}
        </div>
      </div>
    </>
  );
};

export default Transactions;
