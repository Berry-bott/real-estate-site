import React, { useState } from "react";
import Topbar from "./TopBar";
import Navbar from "./BottomBar";

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
            <p className="mt-2">[Calendar goes here]</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setShowCalendar(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Budget Modal */}
      {showBudgetModal && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
            <h2 className="text-lg font-semibold mb-4">Budget Modal</h2>
            <p>Budget details go here...</p>
            <button
              className="absolute top-2 right-2 text-zinc-600 hover:text-zinc-900"
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










// import { Calendar } from "lucide-react";
// import React, { useState } from "react";

// import article from "../assets/article.svg";
// import home1 from "../assets/home-1.svg";
// import messageNotif from "../assets/message-notif.svg";
// import myxelliaAdmin from "../assets/myxellia-admin.svg";
// import notification1 from "../assets/notification-1.svg";
// import profile1 from "../assets/profile-1.svg";
// import scroll from "../assets/scroll.svg";
// import search1 from "../assets/search-1.svg";
// import budgeting from "../assets/budgeting.png";
// import toolbox from "../assets/toolbox.svg";
// import calendar from "../assets/calendar.png";

// export const Header = () => {
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [showBudgetModal, setShowBudgetModal] = useState(false);

//   const navItems = [
//     { name: "Dashboard", icon: home1 },
//     { name: "Listings", icon: toolbox },
//     { name: "Users", icon: profile1 },
//     { name: "Request", icon: article },
//     { name: "Applications", icon: scroll },
//   ];

//   return (
//     <header className="w-full max-w-[1440px] mx-auto ">
//       {/* Top black bar */}
//       <div className="bg-zinc-900 border-b border-zinc-700 h-[82px] flex items-center justify-between px-10">
//         <img
//           className="w-[153px] h-[26px]"
//           alt="Myxellia admin"
//           src={myxelliaAdmin}
//         />
//         <div className="flex items-center gap-6 relative">
//           {/* Notification icon with tooltip */}
//           <div className="relative group">
//             <img className="w-8 h-8" alt="Notification" src={notification1} />
//             <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
//               Notifications
//             </span>
//           </div>


//           {/* Notification icon with tooltip */}
//           <div className="relative group">
//             {/* Budget icon example */}
//             <img
//               src={budgeting}
//               alt="Budget"
//               className="w-8 h-8 cursor-pointer"
//               onClick={() => setShowBudgetModal(true)}
//             />
//             <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
//               Budget

//             </span>
//           </div>


//           {/* Calendar icon with tooltip + popover */}
//           <div className="relative group">
//             <img
//               src={calendar}
//               alt="calendar"
//               className="w-8 h-8 cursor-pointer"
//               onClick={() => setShowBudgetModal(true)}
//             />
//             <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
//               Calendar
//             </span>

//             {showCalendar && (
//               <div className="absolute top-full mt-2 right-0 w-64 bg-white border rounded shadow-lg p-4 z-50">
//                 {/* Placeholder for calendar */}
//                 <p className="text-sm text-zinc-700">[Calendar goes here]</p>
//                 <button
//                   className="mt-2 text-sm text-blue-600"
//                   onClick={() => setShowCalendar(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Message notification */}
//           <img
//             className="w-8 h-8"
//             alt="Message notification"
//             src={messageNotif}
//           />



//           {/* Profile circle */}
//           <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
//             <span className="text-zinc-900 text-[20px] font-bold">D</span>
//           </div>


//           {showBudgetModal && (
//             <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
//               <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
//                 <h2 className="text-lg font-semibold mb-4">Budget Modal</h2>
//                 <p>Budget details go here...</p>
//                 <button
//                   className="absolute top-2 right-2 text-zinc-600 hover:text-zinc-900"
//                   onClick={() => setShowBudgetModal(false)}
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Navigation and search bar */}
//       <nav className="bg-white border-b border-zinc-200 h-[67px] flex items-center justify-between px-10 ">
//         {/* Navigation buttons */}
//         <ul className="flex items-center gap-[65px] font-semibold">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <button
//                 onClick={() => setActiveTab(item.name)}
//                 className={`flex items-center gap-2 px-8 py-2 rounded-lg transition ${activeTab === item.name
//                     ? "bg-blue-100 text-blue-600 font-thin"
//                     : "bg-white text-zinc-600 font-thin hover:bg-zinc-100"
//                   }`}
//               >
//                 <img src={item.icon} alt={item.name} className="w-6 h-6" />
//                 <span>{item.name}</span>
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Search bar */}
//         <div
//           className={`relative w-[319px] h-[43px] rounded-xl flex items-center px-4 transition border ${searchFocused ? "border-blue-500" : "border-zinc-300 bg-zinc-100"
//             }`}
//         >
//           <img src={search1} alt="Search" className="w-5 h-5 mr-2" />
//           <input
//             type="text"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             onFocus={() => setSearchFocused(true)}
//             onBlur={() => setSearchFocused(false)}
//             placeholder={
//               searchFocused
//                 ? "Mary Jane"
//                 : "Search listings, users here..."
//             }
//             className="bg-transparent outline-none text-sm text-zinc-700 w-full"
//           />
//           {/* Clear button */}
//           {searchValue && (
//             <button
//               type="button"
//               className="absolute right-3 text-zinc-500 hover:text-zinc-900"
//               onClick={() => setSearchValue("")}
//             >
//               ×
//             </button>
//           )}

//         </div>
//       </nav>
//     </header>
//   );
// };


