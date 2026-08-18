import React from "react";
import { COLORS } from "../../constants/colors";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import ToolbarButton from "../../components/ToolbarButton";
import Pagination from "../../components/Pagination";
import { Plus, XIcon, Pencil, Search, Eye, Power, ChevronDown } from 'lucide-react';

const violationCategoriesData = [
  { code: "VIO_TY000000019", name: "Không tìm được thông tin", count: 0, status: "Kích hoạt" },
  { code: "VIO_TY000000018", name: "Có dấu hiệu vi phạm", count: 0, status: "Kích hoạt" },
  { code: "VIO_TY000000017", name: "Nghi ngờ: Bác sĩ không có GPHN", count: 3, status: "Kích hoạt" },
  { code: "VIO_TY000000016", name: "Nghi ngờ: Không có cơ sở tại địa chỉ này", count: 1, status: "Kích hoạt" },
  { code: "VIO_TY000000015", name: "Nghi ngờ: Cơ sở không có GPHĐ", count: 588, status: "Kích hoạt" },
  { code: "VIO_TY000000014", name: "Có dấu hiệu bác sĩ không đăng ký hành nghề tại địa chỉ này", count: 4, status: "Kích hoạt" },
  { code: "VIO_TY000000013", name: "Có dấu hiệu bác sĩ không có giấy phép hành nghề", count: 42, status: "Kích hoạt" },
  { code: "VIO_TY000000012", name: "Có dấu hiệu không có cơ sở tại địa chỉ này", count: 11, status: "Kích hoạt" },
  { code: "VIO_TY000000011", name: "Cơ sở có dấu hiệu không đăng ký GPHĐ", count: 1440, status: "Kích hoạt" },
];

function ViolationCategoriesPage() {
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
    borderBottom: "1px solid " + COLORS.rowBorder,
    whiteSpace: "nowrap",
  };
  const inputStyle = {
    height: 42,
    width: "100%",
    border: "1px solid #d5d8dd",
    borderRadius: 4,
    padding: "0 14px",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    color: "#333",
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: 4 }}>
        <ToolbarButton icon={Plus} label="Thêm" />
        <ToolbarButton icon={Pencil} label="Chỉnh sửa" />
        <ToolbarButton icon={XIcon} label="Xóa" />
        <ToolbarButton icon={Search} label="Tìm kiếm" />
        <ToolbarButton icon={Eye} label="Xem chi tiết" />
        <ToolbarButton icon={Power} label="Kích hoạt/Vô hiệu hóa" />
      </div>
      <Breadcrumb current="Quản lý danh sách phân loại vi phạm" />
      <Panel>
        <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 22 }}>
          Quản lý danh sách phân loại vi phạm
        </div>

        <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: "#333", marginBottom: 8 }}>Mã loại vi phạm</div>
            <input style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: "#333", marginBottom: 8 }}>Tên loại vi phạm</div>
            <input style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: "#333", marginBottom: 8 }}>Trạng thái</div>
            <div style={{ position: "relative" }}>
              <select style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 30 }}>
                <option></option>
              </select>
              <ChevronDown
                size={16}
                color={COLORS.headerTextBlue}
                style={{ position: "absolute", right: 12, top: 13, pointerEvents: "none" }}
              />
            </div>
          </div>
        </div>

        <SectionHeader title="Danh sách phân loại vi phạm" />

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 44, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, textAlign: "center" }}>
                  <input type="checkbox" style={{ width: 16, height: 16, cursor: "pointer", accentColor: COLORS.headerTextBlue }} />
                </th>
                <th style={thStyle}>STT</th>
                <th style={thStyle}>Mã loại vi phạm</th>
                <th style={thStyle}>Tên loại vi phạm</th>
                <th style={thStyle}>Số lượng quảng cáo</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {violationCategoriesData.map((r, i) => (
                <tr key={r.code}>
                  <td style={tdStyle}>
                    <input type="checkbox" />
                  </td>
                  <td style={tdStyle}>{i + 1}</td>
                  <td style={tdStyle}>{r.code}</td>
                  <td style={{ ...tdStyle, whiteSpace: "normal" }}>{r.name}</td>
                  <td style={tdStyle}>{r.count}</td>
                  <td style={tdStyle}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total={violationCategoriesData.length} />
      </Panel>
    </div>
  );
}

export default ViolationCategoriesPage;