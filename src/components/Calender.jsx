import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());
  return <Calendar onChange={setValue} value={value} />;
}
