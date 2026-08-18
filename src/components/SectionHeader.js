import React from "react";
import { COLORS } from "../constants/colors";

function SectionHeader({ title, right }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 4, height: 18, background: "#2f5bd6", borderRadius: 2 }} />
        <span style={{ fontWeight: 700, fontSize: 15, color: "#222" }}>{title}</span>
      </div>
      <div>{right}</div>
    </div>
  );
}

export default SectionHeader;