import React from "react";
import { COLORS } from "../../constants/colors";
import { scheduleRows } from "../../data/mock/scheduleRows";
import ToggleSwitch from "../../components/ToggleSwitch";
import Panel from "../../components/Panel";
import ToolbarButton from "../../components/ToolbarButton";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import { Search, Play, Pause, Eye, XIcon, Pencil, Plus } from 'lucide-react';

function SchedulePage() {
  const thStyle = {
    background: COLORS.tableHeaderBg,
    color: COLORS.headerTextBlue,
    fontWeight: 700,
    fontSize: 13.5,
    textAlign: "left",
    padding: "12px 14px",
    whiteSpace: "nowrap",
  };
  const tdStyle = {
    padding: "12px 14px",
    fontSize: 14,
    color: "#333",
    borderBottom: "1px solid #edeff2",
    whiteSpace: "nowrap",
  };
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 4 }}>
        <ToolbarButton icon={Plus} label="Thêm" />
        <ToolbarButton icon={Pencil} label="Chỉnh sửa" />
        <ToolbarButton icon={XIcon} label="Xóa" />
        <ToolbarButton icon={Eye} label="Xem chi tiết" />
      </div>
      <Breadcrumb current="Quản lý lịch thu thập" />
      <Panel>
        <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 20 }}>
          Quản lý lịch thu thập
        </div>
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 14, color: "#333", marginBottom: 8 }}>Tìm kiếm</div>
          <div style={{ display: "flex" }}>
            <input
              style={{
                flex: 1,
                height: 42,
                border: "1px solid #d5d8dd",
                borderRadius: "4px 0 0 4px",
                padding: "0 14px",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              style={{
                width: 52,
                height: 42,
                background: "#2f5bd6",
                border: "none",
                borderRadius: "0 4px 4px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Search size={17} color="#fff" />
            </button>
          </div>
        </div>

        <SectionHeader
          title="Danh sách lịch thu thập"
          right={
            <div style={{ display: "flex", gap: 10 }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  background: "#3fb45b",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                <Play size={14} /> Thu thập
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  background: "#dfe2e8",
                  color: "#8891a5",
                  border: "none",
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "default",
                }}
              >
                <Pause size={14} /> Tạm dừng
              </button>
            </div>
          }
        />

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 40 }}>
                  <input type="checkbox" />
                </th>
                <th style={thStyle}>STT</th>
                <th style={thStyle}>Chủ đề</th>
                <th style={thStyle}>Tên từ khóa</th>
                <th style={thStyle}>Người tạo</th>
                <th style={thStyle}>Trạng thái thu thập</th>
                <th style={thStyle}>Trạng thái lịch</th>
                <th style={thStyle}>Lần chỉnh sửa gần nhất</th>
              </tr>
            </thead>
            <tbody>
              {scheduleRows.map((r, i) => (
                <tr key={r.stt} style={{ background: i === 0 ? "#eef4fd" : "#fff" }}>
                  <td style={tdStyle}>
                    <input type="checkbox" />
                  </td>
                  <td style={tdStyle}>{r.stt}</td>
                  <td style={tdStyle}>{r.chuDe}</td>
                  <td style={tdStyle}>{r.tuKhoa}</td>
                  <td style={tdStyle}>{r.nguoiTao}</td>
                  <td style={tdStyle}>{r.trangThai}</td>
                  <td style={tdStyle}>
                    <ToggleSwitch on={r.lich} />
                  </td>
                  <td style={tdStyle}>{r.sua}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

export default SchedulePage;