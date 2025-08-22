import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";   // <-- added
import frame from "../assets/frame.svg";
import profile from "../assets/profile.svg";
import vector1 from "../assets/Vector.png";
import vector2 from "../assets/Vector1.png";
import vector3 from "../assets/Vector2.png";
import solarHomeLinear from "../assets/solar-home-linear.svg";
import AnalyticsBarChart from "../components/AnalyticsBarChart";

// -----------------------
// Stat Card
// -----------------------
const StatCard = ({ value, label, change, icon, valueColor, changeColor }) => {

  const numericValue = parseInt(value.replace(/[₦,]/g, ""));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
      className="flex justify-center items-start flex-col flex-1 max-w-[200px] bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm"
    >
      {/* Animated Value */}
      <span className={`text-lg font-bold ${valueColor}`}>
        ₦
        <CountUp
          start={1}
          end={numericValue}
          duration={1.8}
          separator=","
        />
      </span>

      {/* Label + Change */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-gray-600">{label}</span>
        <div className="flex items-center gap-1">
          {icon && <img src={icon} alt="change icon" className="w-3 h-3" />}
          <span className={`text-xs font-medium ${changeColor}`}>
            {Math.abs(change)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// -----------------------
// Overview Card
// -----------------------
const OverviewCard = ({ icon, title, stats }) => (
  <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.02, boxShadow: "0px 6px 15px rgba(0,0,0,0.1)" }}
    className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
  >
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
      {stats.map(({ label, value }, idx) => {
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")); // handle k suffix separately
        const hasK = value.toLowerCase().includes("k");

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col min-w-[70px] gap-2"
          >
            <span className="text-xs text-gray-500">{label}</span>
            <span className="text-2xl font-bold text-gray-900">
              <CountUp start={1} end={numericValue} duration={1.5} separator="," />
              {hasK && "k"}
            </span>
          </motion.div>
        );
      })}
    </div>
  </motion.section>
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
    "1 Month": ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7", "Week8", "Week9"],
    "1 Year": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  return (
    <main className="flex flex-col gap-8 px-4 md:px-8 py-4">
      {/* Welcome */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold"
      >
        Welcome, Ahmed
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Sales Overview */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 bg-white rounded-2xl border border-gray-200 flex flex-col shadow-sm"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 pt-4">
            <div>
              <h2 className="text-2xl font-semibold">Sales Overview</h2>
              <p className="text-gray-500 text-sm mt-1">Showing overview Jan 2022 - Sep 2022</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 md:mt-0 border border-gray-200 rounded-full px-5 py-2 text-sm md:text-base font-medium hover:bg-gray-50 transition"
            >
              View Transactions
            </motion.button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap md:justify-end gap-2 px-4 md:px-8 mt-2 overflow-x-auto">
            {tabs.map((t) => (
              <motion.button
                key={t}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                  tab === t
                    ? "bg-gray-500 text-white"
                    : "bg-transparent text-gray-500 hover:bg-gray-100"
                }`}
                onClick={() => setTab(t)}
              >
                {t}
              </motion.button>
            ))}
          </div>

          {/* Chart + Stats */}
          <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-2 pt-4 mt-4">
            {/* Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-1 w-full"
            >
              <AnalyticsBarChart data={chartData[tab]} labels={labels[tab]} />
            </motion.div>

            {/* Stat Cards */}
            <div className="flex flex-wrap justify-center md:justify-start items-start gap-3 w-full md:max-w-[420px]">
              <StatCard
                value="₦120,000,000"
                label="Total Inflow"
                change={2.5}
                icon={vector1}
                changeColor="text-blue-600"
                valueColor="text-blue-600"
              />
              <StatCard
                value="₦50,000,000"
                label="MRR"
                change={2.5}
                icon={vector1}
                changeColor="text-green-500"
                valueColor="text-green-500"
              />
              <StatCard
                value="₦200,000,000"
                label="Commission Revenue"
                change={0.5}
                icon={vector2}
                changeColor="text-[#14B8A6]"
                valueColor="text-[#14B8A6]"
              />
              <StatCard
                value="₦100,000,000"
                label="GMV"
                change={-0.5}
                icon={vector3}
                changeColor="text-red-500"
                valueColor="text-red-500"
              />
            </div>
          </div>
        </motion.section>

        {/* Right Side: Overview Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 w-full lg:w-[420px]"
        >
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
        </motion.div>
      </div>
    </main>
  );
};

export default Analytics;
