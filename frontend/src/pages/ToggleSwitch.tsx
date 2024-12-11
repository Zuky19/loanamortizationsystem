import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div
      className="relative w-[25px] h-[10px] rounded-full cursor-pointer transition-colors duration-300"
      onClick={onToggle}
      style={{
        backgroundColor: isOn ? "#4CAF50" : "#C7CCD0",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Switch Button */}
      <div
        className={`absolute w-[13px] h-[13px] bg-white rounded-full transition-transform duration-300`}
        style={{
          transform: isOn ? "translateX(19px)" : "translateX(3px)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
};

export default ToggleSwitch;
