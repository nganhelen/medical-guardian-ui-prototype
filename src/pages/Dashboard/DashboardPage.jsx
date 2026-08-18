import React from "react";
import { COLORS } from "../../constants/colors";
import ToggleSwitch from "../../components/ToggleSwitch";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "../../components/Pagination";
import { ChevronDown, Calendar, Download, SlidersHorizontal } from 'lucide-react';
import { dashboardStats } from "../../data/mock/dashboardStats";

function DashboardPage() {
  const thStyle = {
    background: COLORS.tableHeaderBg,
    color: COLORS.headerTextBlue,
    fontWeight: 500,
    fontSize: 13,
    textAlign: "left",
    padding: "9px 10px",
    whiteSpace: "nowrap",
    height: 50,
    boxSizing: "border-box",
  };
  const labelStyle = { fontSize: 12, color: "#333", marginBottom: 6 };
  const inputStyle = {
    height: 40,
    border: "1px solid #d5d8dd",
    borderRadius: 4,
    padding: "0 9px",
    fontSize: 12,
    width: "100%",
    outline: "none",
    color: "#333",
    boxSizing: "border-box",
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0 18px",
        }}
      >
        <Breadcrumb current="Dashboard" />
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: -20 }}>
          <ToggleSwitch on={true} />
          <SlidersHorizontal size={18} color={COLORS.toggleDark} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
        {dashboardStats.map((s) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              background: s.color,
              borderRadius: 5.7,
              padding: "22px 8px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.1 }}>{s.value}</div>
            <div style={{ fontSize: 13, marginTop: 3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <Panel>
        <div style={{ textAlign: "center", fontWeight: 600, fontSize: 20, color: "#071437", marginBottom: 22 }}>
          Bảng thống kê số lượng quảng cáo theo chủ đề
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "flex-end", marginBottom: 20, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 160px" }}>
            <div style={labelStyle}>Từ ngày</div>
            <div style={{ position: "relative" }}>
              <input style={inputStyle} defaultValue="15/08/2026" readOnly />
              <Calendar size={16} color={COLORS.headerTextBlue} style={{ position: "absolute", right: 10, top: 12 }} />
            </div>
          </div>
          <div style={{ flex: "1 1 160px" }}>
            <div style={labelStyle}>Đến ngày</div>
            <div style={{ position: "relative" }}>
              <input style={inputStyle} defaultValue="16/08/2026" readOnly />
              <Calendar size={16} color={COLORS.headerTextBlue} style={{ position: "absolute", right: 10, top: 12 }} />
            </div>
          </div>
          <div style={{ flex: "1 1 160px" }}>
            <div style={labelStyle}>Chủ đề</div>
            <div style={{ position: "relative" }}>
              <select style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 30 }}>
                <option>------Tất Cả-----</option>
              </select>
              <ChevronDown
                size={16}
                color={COLORS.headerTextBlue}
                style={{ position: "absolute", right: 10, top: 12, pointerEvents: "none" }}
              />
            </div>
          </div>
          <div style={{ flex: "1 1 160px" }}>
            <div style={labelStyle}>Người tạo</div>
            <div style={{ position: "relative" }}>
              <select style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 30 }}>
                <option>------Tất Cả-----</option>
              </select>
              <ChevronDown
                size={16}
                color={COLORS.headerTextBlue}
                style={{ position: "absolute", right: 10, top: 12, pointerEvents: "none" }}
              />
            </div>
          </div>
          <button
            style={{
              height: 40,
              padding: "0 19px",
              background: COLORS.headerTextBlue,
              color: "#fff",
              border: "none",
              borderRadius: 5.7,
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Lọc
          </button>
          <button
            style={{
              height: 40,
              padding: "0 16px",
              background: COLORS.excelBg,
              color: COLORS.excelText,
              border: "1px solid " + COLORS.excelBorder,
              borderRadius: 2.4,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Download size={13} color={COLORS.excelText} /> Xuất excel
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "auto" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, borderTopLeftRadius: 6 }}>STT</th>
                <th style={thStyle}>Ngày thu thập</th>
                <th style={thStyle}>Chủ đề</th>
                <th style={thStyle}>Người tạo</th>
                <th style={thStyle}>Số tin đã duyệt</th>
                <th style={thStyle}>Số tin chưa duyệt</th>
                <th style={thStyle}>Không phát hiện vi phạm</th>
                <th style={thStyle}>Có dấu hiệu vi phạm</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6 }}>Không tìm được thông tin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={9}
                  style={{
                    textAlign: "center",
                    height: 48,
                    padding: "15px 0",
                    background: "#f1f1f2",
                    color: "#071437",
                    fontSize: 13,
                    boxSizing: "border-box",
                  }}
                >
                  Không có dữ liệu
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination total={0} showPageNumber={false} />
      </Panel>
    </div>
  );
}

export default DashboardPage;