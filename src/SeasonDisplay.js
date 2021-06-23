import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Brrr it's chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  const hemisphere = lat >= 0 ? "Northern" : "Southern";
  if (month >= 0 && month <= 2) {
    return hemisphere === "Northern" ? "winter" : "summer";
  }

  if (month >= 3 && month <= 8) {
    return hemisphere === "Northern" ? "summer" : "winter";
  }

  if (month >= 9 && month <= 11) {
    return hemisphere === "Northern" ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
