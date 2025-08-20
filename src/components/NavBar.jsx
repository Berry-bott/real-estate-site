import React from "react";

const Navbar = ({ activeTab, setActiveTab, navItems, mobile }) => {
  return (
    <ul
      className={`flex ${mobile ? "flex-col gap-4 p-4" : "items-center gap-[65px]"}`}
    >
      {navItems.map((item) => (
        <li key={item.name}>
          <button
            onClick={() => setActiveTab(item.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition 
              ${activeTab === item.name
                ? "bg-blue-100 text-blue-600 font-medium"
                : "bg-white text-zinc-600 hover:bg-zinc-100 font-medium"
              }`}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span>{item.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
