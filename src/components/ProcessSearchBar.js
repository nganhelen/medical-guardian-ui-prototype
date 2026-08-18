import { COLORS } from "../constants/colors";
import { ChevronDown } from 'lucide-react';

function ProcessSearchBar({ extra }) {
  const labelStyle = { fontSize: 14, color: "#333", marginBottom: 8 };
  const inputStyle = {
    height: 42,
    border: "1px solid #d5d8dd",
    borderRadius: 4,
    padding: "0 14px",
    fontSize: 14,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    color: "#333",
  };
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: 2 }}>
          <div style={labelStyle}>Tìm kiếm</div>
          <input style={inputStyle} placeholder="Nhập từ khoá tìm kiếm" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={labelStyle}>Chủ đề</div>
          <div style={{ position: "relative" }}>
            <select style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 30 }}>
              <option>------Tất Cả-----</option>
            </select>
            <ChevronDown
              size={16}
              color={COLORS.headerTextBlue}
              style={{ position: "absolute", right: 12, top: 13, pointerEvents: "none" }}
            />
          </div>
        </div>
      </div>
      {extra}
    </div>
  );
}

export default ProcessSearchBar;