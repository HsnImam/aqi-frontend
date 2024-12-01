import React from "react";

const DateRangePicker = ({ startDate, endDate, onDateChange }) => {
  return (
    <div>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => onDateChange("startDate", e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => onDateChange("endDate", e.target.value)}
        />
      </label>
    </div>
  );
};

export default DateRangePicker;
