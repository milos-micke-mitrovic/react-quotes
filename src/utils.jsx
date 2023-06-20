export const calculatePercentAndColor = (a, b) => {
  if (a + b === 0) return { percent: null, color: "black" };
  let color;
  const percent = Math.floor((a / (a + b)) * 100);

  switch (true) {
    case percent <= 10:
      color = "#dd776e";
      break;
    case percent <= 20:
      color = "#e2886c";
      break;
    case percent <= 30:
      color = "#e79a69";
      break;
    case percent <= 40:
      color = "#ecac67";
      break;
    case percent <= 50:
      color = "#e9b861";
      break;
    case percent <= 60:
      color = "#d4c86a";
      break;
    case percent <= 70:
      color = "#b0be6e";
      break;
    case percent <= 80:
      color = "#94bd77";
      break;
    case percent <= 90:
      color = "#73b87e";
      break;
    case percent <= 100:
      color = "#57bb8a";
      break;
    default:
      break;
  }

  return { percent: percent + "%", color };
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
