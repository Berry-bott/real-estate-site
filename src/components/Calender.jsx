import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium">Calendar</h2>
        <button className="p-1 rounded hover:bg-white/10">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Calendar */}
      <Calendar
        onChange={setValue}
        value={value}
        prevLabel={<ChevronLeft className="w-4 h-4" />}
        nextLabel={<ChevronRight className="w-4 h-4" />}
        prev2Label={null}
        next2Label={null}
        className="
          react-calendar w-full text-xs sm:text-sm
          [&_.react-calendar__navigation]:flex
          [&_.react-calendar__navigation]:justify-between
          [&_.react-calendar__navigation]:items-center
          [&_.react-calendar__navigation]:mb-2
          [&_.react-calendar__navigation__label]:text-white
          [&_.react-calendar__navigation__label]:font-medium
          [&_.react-calendar__navigation__label]:text-sm
          [&_.react-calendar__month-view__weekdays]:text-gray-400
          [&_.react-calendar__tile]:p-2
          [&_.react-calendar__tile]:rounded-lg
          [&_.react-calendar__tile]:text-white
          [&_.react-calendar__tile]:transition
          [&_.react-calendar__tile:hover]:bg-white/10
          [&_.react-calendar__tile--active]:bg-blue-600
          [&_.react-calendar__tile--active]:text-white
          [&_.react-calendar__tile--active]:rounded-full
          [&_.react-calendar__month-view__days__day--neighboringMonth]:text-gray-600
          [&_.react-calendar__month-view__days]:grid
          [&_.react-calendar__month-view__days]:grid-cols-7
          [&_.react-calendar__month-view__days>*]:border
          [&_.react-calendar__month-view__days>*]:border-gray-800
        "
      />
    </div>
  );
}
