"use client";

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue(percentage);
    }, 500);
  }, [percentage]);

  return (
    <div style={{ width: "200px" }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          textSize: "16px",
          textColor: "#fff",
          pathColor: "#06b6d4",
          trailColor: "transparent",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
