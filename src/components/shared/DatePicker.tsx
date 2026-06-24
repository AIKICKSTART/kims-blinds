import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const calendarRows = [
  ["28", "29", "30", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24", "25"],
  ["26", "27", "28", "29", "30", "31", "1"],
];

export function DatePicker() {
  return (
    <div className="date-picker">
      <button type="button" className="date-picker__trigger">
        <CalendarDays size={18} strokeWidth={1.8} aria-hidden="true" />
        <span>May 12, 2024</span>
      </button>
      <div className="calendar-card">
        <div className="calendar-card__header">
          <button type="button" aria-label="Previous month">
            <ChevronLeft size={20} />
          </button>
          <span>May 2024</span>
          <button type="button" aria-label="Next month">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="calendar-grid" role="grid" aria-label="May 2024">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <strong key={day} role="columnheader">
              {day}
            </strong>
          ))}
          {calendarRows.flat().map((day, index) => (
            <span
              key={`${day}-${index}`}
              role="gridcell"
              aria-selected={day === "12" ? true : undefined}
              className={day === "12" ? "is-selected" : index < 3 || index > 33 ? "is-muted" : undefined}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
