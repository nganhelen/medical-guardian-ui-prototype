import React from "react";
import { COLORS } from "../constants/colors";
import { ChevronDown } from 'lucide-react';

function ProcessFilterToggle({ label }) {
  return (
    <div
      style={{
        marginTop: 14,
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 42,
        padding: "0 14px",
        background: COLORS.pillGray,
        border: "1px solid " + COLORS.pillBorder,
        borderRadius: 4,
        cursor: "pointer",
      }}
    >
      <ChevronDown size={15} color={COLORS.headerTextBlue} />
      <span style={{ fontSize: 14, color: COLORS.headerTextBlue, fontWeight: 500 }}>{label}</span>
    </div>
  );
}

export default ProcessFilterToggle;