import React, { useState } from "react";
import home1 from "../assets/home-1.svg";
import toolbox from "../assets/toolbox.svg";
import profile1 from "../assets/profile-1.svg";
import article from "../assets/article.svg";
import scroll from "../assets/scroll.svg";
import search1 from "../assets/search-1.svg";

export default function Navbar({
  activeTab,
  setActiveTab,
  searchFocused,
  setSearchFocused,
  searchValue,
  setSearchValue,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: home1 },
    { name: "Listings", icon: toolbox },
    { name: "Users", icon: profile1 },
    { name: "Request", icon: article },
    { name: "Applications", icon: scroll },
  ];

  return (
    <nav className="bg-white border-b border-zinc-200 h-[67px] flex items-center justify-between px-4 sm:px-10 relative">
      {/* Desktop Nav */}
      <ul className="hidden sm:flex items-center gap-[50px] font-semibold">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <button
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition ${
                activeTab === item.name
                  ? "bg-blue-100 text-blue-600"
                  : "bg-white text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              <span>{item.name}</span>
            </button>
            {/* Tooltip */}
            <span
              className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
              rounded bg-black text-white text-xs px-2 py-1 opacity-0 
              group-hover:opacity-100 transition"
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Search */}
      <div
        className={`relative w-[200px] sm:w-[319px] h-[43px] rounded-xl flex items-center px-4 transition border ${
          searchFocused
            ? "border-blue-500"
            : "border-zinc-300 bg-zinc-100"
        }`}
      >
        <img src={search1} alt="Search" className="w-5 h-5 mr-2" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          placeholder={
            searchFocused ? "Mary Jane" : "Search listings, users here..."
          }
          className="bg-transparent outline-none text-sm text-zinc-700 w-full"
        />
        {searchValue && (
          <button
            type="button"
            className="absolute right-3 text-zinc-500 hover:text-zinc-900"
            onClick={() => setSearchValue("")}
          >
            ×
          </button>
        )}
      </div>

      {/* Mobile Menu (3 Dots) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden p-2 border border-zinc-300 rounded text-zinc-600"
      >
        ⋮
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-2 mt-2 bg-white border border-zinc-200 shadow-lg rounded-lg w-48 p-3 space-y-2 sm:hidden z-50">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md transition ${
                activeTab === item.name
                  ? "bg-blue-100 text-blue-600"
                  : "text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
