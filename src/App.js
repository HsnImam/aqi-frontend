import React, { useState, useEffect } from "react";
import { fetchDateRange } from "./api";
import ParameterSelector from "./components/ParameterSelector";
import DateRangePicker from "./components/DateRangePicker";
import Chart from "./components/Chart";
import { gases } from "./constants";
import "./App.css";

const App = () => {
  const [parameters] = useState(gases);
  const [selectedParameter, setSelectedParameter] = useState("");
  const [startDate, setStartDate] = useState("2004-03-10");
  const [endDate, setEndDate] = useState("2004-03-11");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDateRange(startDate, endDate);
      setChartData(data);
    };
    fetchData();
  }, [selectedParameter, startDate, endDate]);

  const handleDateChange = (type, value) => {
    if (type === "startDate") {
      if (value > endDate) {
        alert("Start date must be earlier than or equal to the end date.");
      } else {
        setStartDate(value);
      }
    }
    if (type === "endDate") {
      if (value < startDate) {
        alert("End date must be later than or equal to the start date.");
      } else {
        setEndDate(value);
      }
    }
  };

  return (
    <div>
      <h1>Air Quality Time Series Visualization</h1>
      <div className="two-column-container">
        <div className="left-column">
          <label>Parameter:</label>
          <ParameterSelector
            parameters={parameters}
            selectedParameter={selectedParameter}
            onSelect={setSelectedParameter}
          />
        </div>
        <div className="right-column">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onDateChange={handleDateChange}
          />
        </div>
      </div>
      {chartData.length ? (
        <Chart data={chartData} parameter={selectedParameter} />
      ) : (
        <div className="empty-result">
          <p>No data available for the selected parameter and date range.</p>
        </div>
      )}
    </div>
  );
};

export default App;
