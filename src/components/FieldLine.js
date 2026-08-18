import { COLORS } from "../constants/colors";

function FieldLine({ label, value, valueColor, wholeColor, isLink, badge }) {
  const lineColor = wholeColor || "#333";
  return (
    <div style={{ fontSize: 13.5, marginBottom: 7, color: lineColor }}>
      <span style={{ fontWeight: 700, color: wholeColor || "#333" }}>{label} : </span>
      {badge ? (
        <span
          style={{
            display: "inline-block",
            background: COLORS.statusYellowBg,
            color: COLORS.statusYellowText,
            fontSize: 12,
            fontWeight: 700,
            padding: "3px 12px",
            borderRadius: 4,
          }}
        >
          {value}
        </span>
      ) : (
        <span
          style={{
            color: wholeColor || valueColor || "#333",
            fontWeight: wholeColor ? 700 : 400,
          }}
        >
          {isLink ? (
            <a href="#" style={{ color: COLORS.headerTextBlue, textDecoration: "none" }} onClick={(e) => e.preventDefault()}>
              {value}
            </a>
          ) : (
            value
          )}
        </span>
      )}
    </div>
  );
}

export default FieldLine;