import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
import Sidebar from "../components/sidebar/sidebar.component";
import IncomeCard from "../components/cards/incomeCard.component";
import UsersCard from "../components/cards/usersCard.component";
import BalanceCard from "../components/cards/balanceCard.component";
import Transactions from "../components/transactions/transactions.component";

const HomePage = () => {
  return (
    <>
      <div className="flex items-start">
        <Sidebar />
        <div className="min-w-[82%] ml-[18%]">
          <Navbar />
          <div className="w-full bg-[#6a71d20f]">
            <div className="max-w-[80%] h-full mx-auto  py-10">
              <div className="w-[100%] h-[50%] flex items-start justify-between gap-5">
                <div className="w-[50%] h-full flex flex-col items-center gap-5">
                  <IncomeCard />
                  <UsersCard />
                </div>
                <div className="w-[50%] h-full bg-white">
                  <BalanceCard />
                </div>
              </div>
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
