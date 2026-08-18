import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import ToolbarButton from "../../components/ToolbarButton";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "../../components/Pagination";
import { Plus, Pencil, XIcon, Search, Eye, ChevronsUpDown } from "lucide-react";

function SystemParameterPage() {
  const [paramCode, setParamCode] = useState("");
  const [paramValue, setParamValue] = useState("");
  const [dataType, setDataType] = useState("");

  const thStyle = {
    background: COLORS.tableHeaderBg,
    color: COLORS.headerTextBlue,
    fontWeight: 600,
    fontSize: 13,
    textAlign: "left",
    padding: "13px 14px",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    userSelect: "none",
  };

  const inputStyle = {
    height: 40,
    width: "100%",
    border: "1px solid #d5d8dd",
    borderRadius: 5,
    padding: "0 14px",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
    color: "#333",
    background: "#fff",
    transition: "border-color 0.2s",
  };

  const renderSortableHeader = (label) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
      <span>{label}</span>
      <ChevronsUpDown size={14} color={COLORS.headerTextBlue} />
    </div>
  );

  return (
    <div>
      {/* Top Action Toolbar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
        <ToolbarButton icon={Plus} label="Thêm" />
        <ToolbarButton icon={Pencil} label="Chỉnh sửa" />
        <ToolbarButton icon={XIcon} label="Xóa" />
        <ToolbarButton icon={Search} label="Tìm kiếm" />
        <ToolbarButton icon={Eye} label="Xem chi tiết" />
        <ToolbarButton icon={Eye} label="Kích hoạt/Vô hiệu hóa" />
      </div>

      {/* Breadcrumb Navigation */}
      <Breadcrumb current="Tham số hệ thống" />

      {/* Main Content Panel */}
      <Panel style={{ padding: "20px 24px" }}>
        {/* Search Filters Row */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Mã tham số
            </div>
            <input
              style={inputStyle}
              value={paramCode}
              onChange={(e) => setParamCode(e.target.value)}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Giá trị tham số
            </div>
            <input
              style={inputStyle}
              value={paramValue}
              onChange={(e) => setParamValue(e.target.value)}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Kiểu dữ liệu
            </div>
            <input
              style={inputStyle}
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
            />
          </div>
        </div>

        {/* Data Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 60, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}>
                  STT
                </th>
                <th style={thStyle}>
                  {renderSortableHeader("Mã tham số")}
                </th>
                <th style={thStyle}>
                  {renderSortableHeader("Giá trị tham số")}
                </th>
                <th style={thStyle}>
                  {renderSortableHeader("Kiểu dữ liệu")}
                </th>
                <th style={thStyle}>
                  {renderSortableHeader("Thông tin mô tả")}
                </th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
                  {renderSortableHeader("Hoạt động")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={6}
                  style={{
                    padding: "36px 14px",
                    textAlign: "center",
                    fontSize: 13,
                    color: "#333",
                  }}
                >
                  Không có dữ liệu
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <Pagination total={0} />
      </Panel>
    </div>
  );
}

export default SystemParameterPage;
