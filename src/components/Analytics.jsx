import React, { useState } from "react";
import frame from "../assets/frame.svg";
import profile from "../assets/profile.svg";
import vector1 from "../assets/Vector.png";
import vector2 from "../assets/Vector1.png";
import vector3 from "../assets/Vector2.png";
import solarHomeLinear from "../assets/solar-home-linear.svg";
import AnalyticsBarChart from "../components/AnalyticsBarChart";


// Stat Card
const StatCard = ({ value, label, change, icon, valueColor, changeColor }) => (
  <div className="flex justify-center items-start flex-col flex-1 max-w-[200px] bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
    {/* Value */}
    <span className={`text-lg font-bold ${valueColor}`}>{value}</span>

    {/* Label + Change flexed */}
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold text-gray-600">{label}</span>
      <div className="flex items-center gap-1">
        {icon && <img src={icon} alt="change icon" className="w-3 h-3" />}
        <span className={`text-xs font-medium ${changeColor}`}>
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  </div>
);



// -----------------------
// Overview Card
// -----------------------
const OverviewCard = ({ icon, title, stats }) => (
  <section className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
    <header className="flex justify-between items-center h-14 px-4 bg-gray-50 border-b border-gray-200">
      <div className="flex items-center gap-2.5">
        <img className="w-6 h-6 object-contain" src={icon} alt={`${title} icon`} />
        <h2 className="text-sm font-medium text-gray-800">{title}</h2>
      </div>
      <div className="flex items-center gap-1 text-xs text-blue-600 font-medium cursor-pointer hover:underline">
        View all
        <img className="w-4 h-4" src={frame} alt="arrow" />
      </div>
    </header>
    <div className="flex justify-between flex-wrap gap-4 px-4 pt-5 pb-4">
      {stats.map(({ label, value }, idx) => (
        <div key={idx} className="flex flex-col min-w-[70px] gap-2">
          <span className="text-xs text-gray-500">{label}</span>
          <span className="text-xl font-semibold text-gray-900">{value}</span>
        </div>
      ))}
    </div>
  </section>
);

// -----------------------
// Main Analytics Page
// -----------------------
const Analytics = () => {
  const [tab, setTab] = useState("1 Year");

  const tabs = ["1 Week", "1 Month", "1 Year"];

  const chartData = {
    "1 Week": [20, 35, 40, 30, 50, 25, 45],
    "1 Month": [50, 30, 20, 40, 10, 35, 45, 25, 15],
    "1 Year": [60, 55, 70, 50, 80, 65, 75, 45, 55],
  };

  const labels = {
    "1 Week": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "1 Month": [
      "Week1",
      "Week2",
      "Week3",
      "Week4",
      "Week5",
      "Week6",
      "Week7",
      "Week8",
      "Week9",
    ],
    "1 Year": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  return (
    <main className="fle flex-col gap-8 px-4 md:px-8 py-4 ">
      {/* Welcome */}
      <h1 className="text-2xl font-semibold mb-4">Welcome, Ahmed</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Sales Overview */}
        <section className="flex-1 bg-white rounded-2xl border border-gray-200 flex flex-col shadow-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 pt-4">
            <div>
              <h2 className="text-2xl font-semibold">Sales Overview</h2>
              <p className="text-gray-500 text-sm mt-1">
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>
            <button className="mt-4 md:mt-0 border border-gray-200 rounded-full px-5 py-2 text-sm md:text-base font-medium hover:bg-gray-50 transition">
              View Transactions
            </button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap md:justify-end gap-2 px-4 md:px-8 mt-2 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                className={`px-4 py-1 rounded text-sm font-medium transition-colors duration-200 ${tab === t
                  ? "bg-gray-500 text-white"
                  : "bg-transparent text-gray-500 hover:bg-gray-100"
                  }`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Chart + Stats */}
          <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-2 pt-4 mt-4 border ">
            {/* Chart */}
            <div className="flex-1 w-full">
              <AnalyticsBarChart data={chartData[tab]} labels={labels[tab]} />
            </div>

            {/* Stat Cards */}
            <div className="flex flex-wrap justify-center md:justify-start items-start gap-3 w-full
             md:max-w-[420px] ">
              <StatCard
                value="₦120,000,000.00"
                label="Total Inflow"
                change={2.5}
                icon={vector1}
                changeColor="text-blue-600"
                valueColor="text-blue-600"
              />
              <StatCard
                value="₦50,000,000.00"
                label="MRR"
                change={2.5}
                icon={vector1}
                changeColor="text-green-500"
                valueColor="text-green-500"
              />
              <StatCard
                value="₦200,000,000.00"
                label="Commission Revenue"
                change={0.5}
                icon={vector2}
                changeColor="text-[#14B8A6]"
                valueColor="text-[#14B8A6]"
              />
              <StatCard
                value="₦100,000,000.00"
                label="GMV"
                change={-0.5}
                icon={vector3}
                changeColor="text-red-500"
                valueColor="text-red-500"
              />
            </div>

          </div>
        </section>

        {/* Right Side: Overview Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-[420px]">
          <OverviewCard
            icon={solarHomeLinear}
            title="Listings Overview"
            stats={[
              { label: "Total", value: "1.8k" },
              { label: "Active", value: "80" },
              { label: "Archived", value: "1k" },
            ]}
          />
          <OverviewCard
            icon={profile}
            title="Users Overview"
            stats={[
              { label: "Total", value: "20.7k" },
              { label: "Riders", value: "8.5k" },
              { label: "Subscribers", value: "7.5k" },
            ]}
          />
        </div>
      </div>
    </main>
  );
};

export default Analytics;

