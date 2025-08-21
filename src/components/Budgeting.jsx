import React from "react";
import calcIcon from "../assets/Budgeting.png"; // top calculator icon
import feature1 from "../assets/solar-home-linear.svg";
import feature2 from "../assets/vector-2.svg";
import feature3 from "../assets/vector-2.svg";

const features = [
  {
    icon: feature1,
    title: "Set up annual budgets by account category",
    desc: "Allocate funds across income and expense lines with full visibility.",
  },
  {
    icon: feature2,
    title: "Track actuals vs budget in real time",
    desc: "See how your community is performing against plan, month by month.",
  },
  {
    icon: feature3,
    title: "Adjust figures and forecast with ease",
    desc: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
  },
];

const Budgeting = ({ onCreateBudget }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1a2f] to-[#14253d] px-4 py-8">
    <div className="w-full max-w-md md:max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col">
      {/* Top section with calculator icon */}
      <div className="bg-[#0d1a2f] flex flex-col items-center justify-center pt-8 pb-7">
        <div className="rounded-full p-4 bg-[#13223b] shadow-lg">
          <img
            src={calcIcon}
            alt="Calculator"
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />
        </div>
      </div>

      {/* Features */}
      <div className="bg-white px-6 sm:px-10 pt-7 pb-8">
        <div className="grid gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <img
                src={f.icon}
                alt={f.title}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-[15px] sm:text-lg text-[#111] leading-snug mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={onCreateBudget}
          className="w-full mt-8 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full py-3 text-base sm:text-lg font-medium transition active:scale-95 shadow-md"
        >
          Create Budget
        </button>
      </div>
    </div>
  </div>
);

export default Budgeting;
