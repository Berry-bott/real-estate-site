import React, { useState } from "react";
import notification1 from "../assets/notification-1.svg";
import budgeting from "../assets/Budgeting.png";
import calendar from "../assets/Calendar.png";
import messageNotif from "../assets/message-notif.svg";
import myxelliaAdmin from "../assets/myxellia-admin.svg";

export default function Topbar({ setShowBudgetModal, setShowCalendar }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-zinc-900 border-b border-zinc-700 h-[82px] flex items-center justify-between px-4 sm:px-10 relative">
      {/* Logo */}
      <img
        className="w-[120px] sm:w-[153px] h-auto"
        alt="Myxellia admin"
        src={myxelliaAdmin}
      />

      {/* Desktop Icons */}
      <div className="hidden sm:flex items-center gap-6">
        {/* Notifications */}
        <div className="relative group flex items-center justify-center">
          <img className="w-8 h-8 cursor-pointer" alt="Notification" src={notification1} />
          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
            rounded bg-black text-white text-xs px-2 py-1 opacity-0 
            group-hover:opacity-100 transition">
            Notifications
          </span>
        </div>

        {/* Budget */}
        <div className="relative group flex items-center justify-center">
          <img
            src={budgeting}
            alt="Budget"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShowBudgetModal(true)}
          />
          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
            rounded bg-black text-white text-xs px-2 py-1 opacity-0 
            group-hover:opacity-100 transition">
            Budget
          </span>
        </div>

        {/* Calendar */}
        <div className="relative group flex items-center justify-center">
          <img
            src={calendar}
            alt="Calendar"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShowCalendar(true)}
          />
          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
            rounded bg-black text-white text-xs px-2 py-1 opacity-0 
            group-hover:opacity-100 transition">
            Calendar
          </span>
        </div>

        {/* Messages */}
        <div className="relative group flex items-center justify-center">
          <img className="w-8 h-8 cursor-pointer" alt="Messages" src={messageNotif} />
          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
            rounded bg-black text-white text-xs px-2 py-1 opacity-0 
            group-hover:opacity-100 transition">
            Messages
          </span>
        </div>

        {/* Profile */}
        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-zinc-900 text-[20px] font-bold">D</span>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden p-2 text-white border border-zinc-600 rounded"
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[82px] right-0 bg-zinc-800 text-white w-56 p-4 space-y-3 sm:hidden shadow-lg z-50">
          <button className="block w-full text-left hover:text-blue-400">Notifications</button>
          <button
            className="block w-full text-left hover:text-blue-400"
            onClick={() => {
              setShowBudgetModal(true);
              setMenuOpen(false);
            }}
          >
            Budget
          </button>
          <button
            className="block w-full text-left hover:text-blue-400"
            onClick={() => {
              setShowCalendar(true);
              setMenuOpen(false);
            }}
          >
            Calendar
          </button>
          <button className="block w-full text-left hover:text-blue-400">Messages</button>
          <button className="block w-full text-left hover:text-blue-400">Profile</button>
        </div>
      )}
    </div>
  );
}
