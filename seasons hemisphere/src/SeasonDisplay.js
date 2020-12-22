import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  summer: {
    text: "let's hit the beach! ",
    iconName: 'sun',
  },
  winter: {
    text: "Burr it's cold!",
    iconName: 'snowflake',
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  /*
  const text = season === 'winter' ? "Burr it's chilly" : "Let's hit the beach";
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  */
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
