import { Header } from "../components/Header"
import Analytics from "../components/Analytics"
import Footer from "../components/Footer"
export default function Dashboard() {
  return (

    <>
      <main >

        <Header />
        <section className="bg-[#fafbfc] min-h-screen px-[10px]">

        <Analytics />
        <Footer />
        </section>
      </main>
    </>
  )
}



// import React from "react";
// import { Budgeting } from "../Budgeting/Budgeting";
// import { Calendar } from "../Calendar/Calendar";
// import article from "./article.svg";
// import frame3 from "./frame-3.svg";
// import frame from "./frame.svg";
// import home1 from "./home-1.svg";
// import img from "./img.png";
// import messageNotif from "./message-notif.svg";
// import messages3 from "./messages-3.svg";
// import myxelliaAdmin from "./myxellia-admin.svg";
// import notification1 from "./notification-1.svg";
// import profile1 from "./profile-1.svg";
// import profile from "./profile.svg";
// import scroll from "./scroll.svg";
// import search1 from "./search-1.svg";
// import solarHomeLinear from "./solar-home-linear.svg";
// import toolbox from "./toolbox.svg";
// import vector2 from "./vector-2.svg";
// import vector3 from "./vector-3.svg";
// import "./style.css";

// export const Dashboard = () => {
//   return (
//     <main className="dashboard">
//       <div className="overlap-wrapper">
//         <div className="overlap">
//           {/* <header className="header">
//             <div className="overlap-6">
//               <div className="dashbaord">
//                 <div className="rectangle-33" />
//                 <div className="overlap-group-7">
//                   <nav className="option" aria-label="Main navigation">
//                     <div className="group-14">
//                       <div className="frame-20">
//                         <img className="img-2" alt="Home" src={home1} />
//                         <span className="text-wrapper-21">Dashboard</span>
//                       </div>
//                     </div>
//                     <div className="business">
//                       <div className="frame-21">
//                         <img className="img-2" alt="Toolbox" src={toolbox} />
//                         <span className="text-wrapper-22">Listings</span>
//                       </div>
//                     </div>
//                     <div className="account">
//                       <div className="frame-21">
//                         <img className="img-2" alt="Profile" src={profile1} />
//                         <span className="text-wrapper-22">Users</span>
//                       </div>
//                     </div>
//                     <div className="account-2">
//                       <div className="frame-21">
//                         <img className="img-2" alt="Article" src={article} />
//                         <span className="text-wrapper-22">Request</span>
//                       </div>
//                     </div>
//                     <div className="account-3">
//                       <div className="frame-21">
//                         <img className="img-2" alt="Scroll" src={scroll} />
//                         <span className="text-wrapper-22">Applications</span>
//                       </div>
//                     </div>
//                   </nav>
//                   <div className="sarch-bar" role="search">
//                     <div className="content-2">
//                       <img className="img-2" alt="Search" src={search1} />
//                       <input
//                         type="text"
//                         className="search-properties"
//                         placeholder="Search listings, users here..."
//                         aria-label="Search listings, users"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="container">
//                 <div className="element">
//                   <img
//                     className="img-3"
//                     alt="Notification"
//                     src={notification1}
//                   />
//                   <Budgeting property1="default" />
//                   <Calendar className="calendar-instance" property1="default" />
//                   <img
//                     className="img-3"
//                     alt="Message notif"
//                     src={messageNotif}
//                   />
//                 </div>
//                 <div className="profile">
//                   <div className="component">
//                     <div className="avatar" aria-label="User avatar">
//                       <span className="text-4">D</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <img
//                 className="myxellia-admin"
//                 alt="Myxellia admin"
//                 src={myxelliaAdmin}
//               />
//             </div>
//           </header> */}

//           <section className="welcome-message" aria-label="Welcome message">
//             <h1 className="text-wrapper">Welcome, Ahmed</h1>
//           </section>

//           <section className="frame" aria-label="Dashboard content">
//             <div className="chart" aria-label="Sales Overview Chart">
//               <div className="overlap-4">
//                 <div className="rectangle" />
//                 <div className="group">
//                   <img className="frame-2" alt="Frame" src={frame3} />
//                 </div>
//                 <img className="vector" alt="Vector" src={vector2} />
//                 <img className="vector-2" alt="Vector" src={vector3} />
//                 <h2 className="text-wrapper-4">Sales Overview</h2>
//                 <p className="p">Showing overview Jan 2022 - Sep 2022</p>
//                 <div className="downlaod-report">
//                   <button className="download-report">View Transactions</button>
//                 </div>
//                 <div
//                   className="frame-13"
//                   role="tablist"
//                   aria-label="Time range selector"
//                 >
//                   <button className="group-12" role="tab">
//                     <div className="overlap-group-5">
//                       <span className="text-wrapper-14">1 Week</span>
//                     </div>
//                   </button>
//                   <button className="group-12" role="tab">
//                     <div className="overlap-group-5">
//                       <span className="text-wrapper-15">1 Month</span>
//                     </div>
//                   </button>
//                   <button className="group-13" role="tab" aria-selected="true">
//                     <div className="overlap-5">
//                       <span className="text-wrapper-16">1 Year</span>
//                     </div>
//                   </button>
//                 </div>
//                 {/* Chart bars and metrics are preserved as-is due to static nature */}
//               </div>
//             </div>

//             <aside className="overview" aria-label="Overview Cards">
//               <div className="card" aria-label="Listings Overview">
//                 <div className="overlap-group-6">
//                   <div className="frame-16">
//                     <span className="text-wrapper-19">View all</span>
//                     <img className="frame-17" alt="Frame" src={frame} />
//                   </div>
//                   <div className="TEXT">
//                     <img
//                       className="img-2"
//                       alt="Listings icon"
//                       src={solarHomeLinear}
//                     />
//                     <span className="text-wrapper-20">Listings Overview</span>
//                   </div>
//                 </div>
//                 <div className="content">
//                   <div className="frame-18">
//                     <span className="heading">Total</span>
//                     <span className="number">1.8k</span>
//                   </div>
//                   <div className="frame-18">
//                     <div className="frame-19">
//                       <span className="heading-2">Active</span>
//                       <span className="number">80</span>
//                     </div>
//                   </div>
//                   <div className="frame-18">
//                     <span className="heading">Archived</span>
//                     <span className="number">1k</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="card" aria-label="Users Overview">
//                 <div className="overlap-group-6">
//                   <div className="frame-16">
//                     <span className="text-wrapper-19">View all</span>
//                     <img className="frame-17" alt="Frame" src={frame} />
//                   </div>
//                   <div className="TEXT">
//                     <img className="img-2" alt="Users icon" src={profile} />
//                     <span className="text-wrapper-20">Users Overview</span>
//                   </div>
//                 </div>
//                 <div className="content">
//                   <div className="frame-18">
//                     <span className="heading">Total</span>
//                     <span className="number">20.7k</span>
//                   </div>
//                   <div className="frame-18">
//                     <div className="frame-19">
//                       <span className="heading-2">Riders</span>
//                       <span className="number">8.5k</span>
//                     </div>
//                   </div>
//                   <div className="frame-18">
//                     <span className="heading">Subscribers</span>
//                     <span className="number">7.5k</span>
//                   </div>
//                 </div>
//               </div>
//             </aside>
//           </section>

//           <section className="overlap-group" aria-label="Highlights">
//             <span className="div">204</span>
//             <div className="row">
//               <article className="metric-item" aria-label="Most Clicked">
//                 <div className="overlap-group-2">
//                   <div className="progression">
//                     <span className="cc" />
//                     <span className="cc-2" />
//                   </div>
//                   <div className="text">
//                     <span className="text-wrapper-2">MOST CLICKED</span>
//                     <span className="text-wrapper-3">
//                       Urban Prime Plaza Premiere
//                     </span>
//                   </div>
//                 </div>
//               </article>

//               <article
//                 className="overlap-group-wrapper"
//                 aria-label="Most Watchlisted"
//               >
//                 <div className="overlap-2">
//                   <div className="imgg">
//                     <div className="overlap-group-3">
//                       <img className="img" alt="Watchlisted" src={img} />
//                       <div className="overlay" />
//                     </div>
//                   </div>
//                   <div className="progression-2">
//                     <span className="cc" />
//                     <span className="cc-2" />
//                     <span className="cc-2" />
//                     <span className="cc-2" />
//                     <span className="cc-2" />
//                   </div>
//                   <div className="text-2">
//                     <span className="text-wrapper-2">MOST WATCHLISTED</span>
//                     <span className="text-wrapper-3">
//                       Urban Prime Plaza Premiere
//                     </span>
//                   </div>
//                 </div>
//               </article>

//               <article
//                 className="overlap-group-wrapper"
//                 aria-label="Hottest Listing"
//               >
//                 <div className="overlap-3">
//                   <div className="overlay-wrapper">
//                     <div className="overlay-2" />
//                   </div>
//                   <div className="progression-3">
//                     <span className="cc" />
//                     <span className="cc-2" />
//                     <span className="cc-2" />
//                     <span className="cc-2" />
//                     <span className="cc-2" />
//                   </div>
//                   <div className="text-3">
//                     <span className="text-wrapper-2">HOTTEST LISTING</span>
//                     <span className="text-wrapper-3">
//                       Urban Prime Plaza Premiere
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             </div>
//             <footer className="footer" aria-label="Footer">
//               <img className="img-2" alt="Messages" src={messages3} />
//             </footer>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };
