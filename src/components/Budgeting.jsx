import React from "react";
import calcIcon from "../assets/Budgeting.png";       // top calculator icon
import feature1 from "../assets/solar-home-linear.svg";  // replace with real images
import feature2 from "../assets/vector-2.svg";
import feature3 from "../assets/vector-2.svg";
// import feature3 from "../assets/feature3.png";

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
    <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-white">
      {/* Top section with image */}
      <div className="bg-[#0d1a2f] flex flex-col items-center justify-center pt-8 pb-7">
        <div className="bg-[#0d1a2f] rounded-full p-4 mb-2">
          <img src={calcIcon} alt="Calculator" className="w-14 h-14 object-contain" />
        </div>
      </div>

      {/* Features */}
      <div className="bg-white px-6 sm:px-8 pt-7 pb-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-start gap-3 mb-6 last:mb-0"
          >
            <img
              src={f.icon}
              alt={f.title}
              className="w-6 h-6 object-contain mt-1 flex-shrink-0"
            />
            <div>
              <div className="font-semibold text-base sm:text-lg text-[#111] leading-tight mb-1">
                {f.title}
              </div>
              <div className="text-gray-500 text-sm sm:text-[15px]">{f.desc}</div>
            </div>
          </div>
        ))}

        {/* CTA button */}
        <button
          className="w-full mt-4 bg-[#2563eb] text-white rounded-full py-3 text-base font-medium transition hover:bg-[#1d4ed8] active:scale-95"
          onClick={onCreateBudget}
        >
          Create Budget
        </button>
      </div>
    </div>
  </div>
);

export default Budgeting;
