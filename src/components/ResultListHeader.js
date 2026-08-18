import { COLORS } from "../constants/colors";

function ResultListHeader() {
  return (
    <div
      style={{
        display: "flex",
        background: COLORS.tableHeaderBg,
        borderRadius: "6px 6px 0 0",
      }}
    >
      <div
        style={{
          width: 70,
          flexShrink: 0,
          padding: "12px 14px",
          fontWeight: 700,
          fontSize: 13.5,
          color: COLORS.headerTextBlue,
        }}
      >
        STT
      </div>
      <div
        style={{
          flex: 1,
          padding: "12px 14px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: 13.5,
          color: COLORS.headerTextBlue,
        }}
      >
        Nội dung
      </div>
    </div>
  );
}

export default ResultListHeader;