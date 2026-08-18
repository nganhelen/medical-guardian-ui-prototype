import { COLORS } from "../constants/colors";

function ResultRow({ index, children, isLast }) {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: isLast ? "none" : "1px solid " + COLORS.rowBorder,
        padding: "16px 14px",
      }}
    >
      <div style={{ width: 56, flexShrink: 0, fontSize: 13, color: "#333" }}>{index}</div>
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
    </div>
  );
}

export default ResultRow;