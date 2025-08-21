import React, { useState } from "react";
import Topbar from "./TopBar";
import Navbar from "./BottomBar";
import Budget from "./Budgeting";
import Calender from "./Calender";


export const Header = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false);

  return (
    <header className="w-full max-w-[1440px] mx-auto">
      <Topbar setShowBudgetModal={setShowBudgetModal} setShowCalendar={setShowCalendar} />
      <Navbar
        activeTab={activeTab}

        setActiveTab={setActiveTab}
        searchFocused={searchFocused}
        setSearchFocused={setSearchFocused}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {/* Calendar Popover */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold">Calendar</h2>
            <div className="mt-2">
              <Calender />
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setShowCalendar(false)}>
              Close
            </button>
          </div>
        </div>
      )}

{showBudgetModal && (
  <div
    className="fixed inset-0 bg-black/40 flex items-center rounded-xl justify-center z-50 px-4"
    onClick={() => setShowBudgetModal(false)} // Close on overlay click
  >
    <div
      className="bg-white rounded-xl w-full max-w-lg shadow-xl relative flex flex-col"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* Header */}
      <div className="flex justify-between items-center  px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">Budget Modal</h2>
        <button
          className="text-zinc-600 hover:text-zinc-900 text-2xl leading-none"
          onClick={() => setShowBudgetModal(false)}
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div className="p-6 max-h-[80vh] overflow-y-auto">
        <Budget />
      </div>
    </div>
  </div>
)}


    </header>
  );
};




