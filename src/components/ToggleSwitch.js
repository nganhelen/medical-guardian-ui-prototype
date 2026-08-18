import React from "react";
import { COLORS } from "../constants/colors";

function ToggleSwitch({ on }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 40,
        height: 20,
        borderRadius: 999,
        background: on ? COLORS.toggleDark : "#c9ccd1",
        position: "relative",
        transition: "background 0.15s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          left: on ? 21 : 2,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.15s",
          boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
        }}
      />
    </span>
  );
}

export default ToggleSwitch;