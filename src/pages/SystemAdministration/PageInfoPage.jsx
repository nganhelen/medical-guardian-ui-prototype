import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import ToolbarButton from "../../components/ToolbarButton";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "../../components/Pagination";
import {
  Plus,
  Pencil,
  XIcon,
  Search,
  Eye,
  ChevronsUpDown,
  ChevronDown,
  SlidersHorizontal,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

function PageInfoPage() {
  const [pageName, setPageName] = useState("");
  const [pageNameEn, setPageNameEn] = useState("");
  const [parentPage, setParentPage] = useState("");
  const [showTreeMode, setShowTreeMode] = useState(false);

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

      {/* Breadcrumb with right action switches */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Breadcrumb current="Thông tin trang" />
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginRight: 4 }}>
          <div
            onClick={() => setShowTreeMode(!showTreeMode)}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", color: "#333" }}
          >
            {showTreeMode ? <ToggleRight size={24} color="#3577DB" /> : <ToggleLeft size={24} color="#333" />}
          </div>
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center", color: "#333" }}>
            <SlidersHorizontal size={18} />
          </div>
        </div>
      </div>

      {/* Main Content Panel */}
      <Panel style={{ padding: "20px 24px" }}>
        {/* Filter Inputs Row */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Tên trang
            </div>
            <input
              style={inputStyle}
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Tên tiếng anh
            </div>
            <input
              style={inputStyle}
              value={pageNameEn}
              onChange={(e) => setPageNameEn(e.target.value)}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Mã trang cha
            </div>
            <div style={{ position: "relative" }}>
              <select
                style={{
                  ...inputStyle,
                  appearance: "none",
                  WebkitAppearance: "none",
                  paddingRight: 30,
                  cursor: "pointer",
                }}
                value={parentPage}
                onChange={(e) => setParentPage(e.target.value)}
              >
                <option value=""></option>
                <option value="root">Trang gốc</option>
                <option value="system">Cài đặt hệ thống</option>
                <option value="admin">Quản trị hệ thống</option>
              </select>
              <ChevronDown
                size={16}
                color={COLORS.headerTextBlue}
                style={{ position: "absolute", right: 12, top: 12, pointerEvents: "none" }}
              />
            </div>
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
                <th style={thStyle}>{renderSortableHeader("Mã trang")}</th>
                <th style={thStyle}>{renderSortableHeader("Tên trang")}</th>
                <th style={thStyle}>{renderSortableHeader("Tên tiếng anh")}</th>
                <th style={thStyle}>{renderSortableHeader("Biểu tượng")}</th>
                <th style={thStyle}>{renderSortableHeader("Đường dẫn")}</th>
                <th style={thStyle}>{renderSortableHeader("Mã trang cha")}</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
                  {renderSortableHeader("Thứ tự")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={8}
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

export default PageInfoPage;
