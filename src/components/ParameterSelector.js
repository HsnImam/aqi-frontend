import React from "react";

const ParameterSelector = ({ parameters, selectedParameter, onSelect }) => {
  return (
    <select
      value={selectedParameter}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select a parameter</option>
      {Object.entries(parameters).map(([key, name]) => (
        <option key={key} value={key}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default ParameterSelector;
