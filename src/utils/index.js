const generateRandomColor = () =>
  `#${Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase()
  ).join("")}`;

export const generateRandomColors = (count) =>
  Array.from({ length: count }, generateRandomColor);
