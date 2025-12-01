import { useState } from "react";

export function CalendarView({ tasks }: { tasks: any[] }) {
  const [currentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks: number[][] = [];
  let day = 1 - firstDay;
  while (day <= daysInMonth) {
    const week: number[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(day);
      day++;
    }
    weeks.push(week);
  }

  return (
    <div className="border rounded-md p-4">
      <h3 className="text-lg font-semibold mb-2">
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-medium">
            {d}
          </div>
        ))}
        {weeks.map((week, i) => (
          <React.Fragment key={i}>
            {week.map((d, j) => (
              <div
                key={j}
                className={`p-1 rounded ${
                  d > 0 && d <= daysInMonth
                    ? "bg-muted hover:bg-muted/80 cursor-pointer"
                    : "text-muted-foreground"
                }`}
              >
                {d > 0 && d <= daysInMonth ? d : ""}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
