import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchDateRange = async (startDate, endDate) => {
  const params = {};
  if (startDate) params.startDate = startDate;
  if (endDate) params.endDate = endDate;

  const response = await axios.get(`${apiBaseUrl}/date-range`, { params });
  return response.data;
};
