import React from "react";
import { COLORS } from "../constants/colors";

function ToolbarButton({ icon: Icon, label, primary, disabled }) {
  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 16px",
        fontSize: 14,
        borderRadius: 4,
        border: "1px solid " + (primary ? "#2f5bd6" : "#d5d8dd"),
        background: disabled ? "#f0f1f3" : primary ? "#2f5bd6" : "#fff",
        color: disabled ? "#aaa" : primary ? "#fff" : "#333",
        cursor: disabled ? "default" : "pointer",
        marginRight: 10,
        fontWeight: 500,
      }}
    >
      <Icon size={15} />
      {label}
    </button>
  );
}

export default ToolbarButton;