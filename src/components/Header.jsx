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
              <Calender/>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setShowCalendar(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Budget Modal */}
      {showBudgetModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
              <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl relative">
                    <h2 className="text-lg font-semibold mb-4">Budget Modal</h2>

                          <div className="border rounded-md overflow-hidden">
                                  <Budget />
                                        </div>

                                              <button
                                                      className="absolute top-3 right-3 text-zinc-600 hover:text-zinc-900 text-xl"
                                                              onClick={() => setShowBudgetModal(false)}
                                                                    >
                                                                            ×
                                                                                  </button>
                                                                                      </div>
                                                                                        </div>
                                                                                        )}



    </header>
  );
};




