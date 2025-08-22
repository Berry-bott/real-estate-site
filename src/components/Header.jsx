import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <Topbar
        setShowBudgetModal={setShowBudgetModal}
        setShowCalendar={setShowCalendar}
      />

      {/* Navbar with animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 15 }}
      >
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchFocused={searchFocused}
          setSearchFocused={setSearchFocused}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </motion.div>

      {/* Calendar Popover */}
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded shadow-lg w-96"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h2 className="text-lg font-semibold">Calendar</h2>
              <div className="mt-2">
                <Calender />
              </div>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setShowCalendar(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Budget Modal */}
      <AnimatePresence>
        {showBudgetModal && (
          <motion.div
            className="fixed top-20 inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBudgetModal(false)}
          >
            <motion.div
              className="bg-white rounded-xl w-full max-w-lg shadow-xl relative flex flex-col"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h2 className="text-lg font-semibold">Budget Modal</h2>
                <button
                  className="text-zinc-600 hover:text-zinc-900 text-2xl leading-none"
                  onClick={() => setShowBudgetModal(false)}
                >
                  ×
                </button>
              </div>

              {/* Body */}
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <Budget />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
