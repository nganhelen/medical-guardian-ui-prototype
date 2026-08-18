import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import ToolbarButton from "../../components/ToolbarButton";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import Pagination from "../../components/Pagination";
import { Plus, Search, Settings, ChevronDown } from "lucide-react";

const rolesData = [
  {
    stt: 1,
    role: "Admin",
    tag: { label: "Tĩnh", bg: "#3577DB" },
    created: "26/04/2024",
    description: "",
    status: "Kích hoạt",
  },
  {
    stt: 2,
    role: "Giám đốc",
    tag: null,
    created: "19/08/2025",
    description: "",
    status: "Kích hoạt",
  },
  {
    stt: 3,
    role: "Quản lý cookies",
    tag: null,
    created: "12/05/2026",
    description: "",
    status: "Kích hoạt",
  },
  {
    stt: 4,
    role: "Thanh tra",
    tag: { label: "Mặc định", bg: "#071437" },
    created: "14/03/2025",
    description: "Thanh tra Sở Y Tế",
    status: "Kích hoạt",
  },
  {
    stt: 5,
    role: "Trưởng phòng",
    tag: null,
    created: "19/08/2025",
    description: "",
    status: "Kích hoạt",
  },
  {
    stt: 6,
    role: "Xem nội dung quảng cáo",
    tag: null,
    created: "03/11/2025",
    description:
      "Vai trò này dành riêng cho việc xem các bài thu thập của tất cả chủ đề và không có quyền duyệt",
    status: "Kích hoạt",
  },
];

function RoleManagementPage() {
  const [roleFilter, setRoleFilter] = useState("all");
  const [roleName, setRoleName] = useState("");
  const [priority, setPriority] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const thStyle = {
    background: COLORS.tableHeaderBg,
    color: COLORS.headerTextBlue,
    fontWeight: 700,
    fontSize: 13,
    textAlign: "left",
    padding: "13px 14px",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "12px 14px",
    fontSize: 13,
    color: "#333",
    borderBottom: "1px solid " + COLORS.rowBorder,
    verticalAlign: "middle",
  };

  const inputStyle = {
    height: 40,
    width: "100%",
    border: "1px solid #d5d8dd",
    borderRadius: 4,
    padding: "0 14px",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
    color: "#333",
    background: "#fff",
  };

  return (
    <div>
      {/* Top Toolbar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
        <ToolbarButton icon={Plus} label="Thêm" />
        <ToolbarButton icon={Search} label="Tìm kiếm" />
      </div>

      {/* Breadcrumb */}
      <Breadcrumb current="Quản lý vai trò" />

      {/* Main Panel */}
      <Panel style={{ padding: "20px 24px" }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#071437", marginBottom: 20 }}>
          Quản lý vai trò
        </div>

        {/* Filter Rows */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>Vai trò</div>
            <div style={{ position: "relative" }}>
              <select
                style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 30 }}
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="all">------Tất Cả------</option>
                <option value="admin">Admin</option>
                <option value="giamdoc">Giám đốc</option>
                <option value="thanhtra">Thanh tra</option>
              </select>
              <ChevronDown
                size={16}
                color={COLORS.headerTextBlue}
                style={{ position: "absolute", right: 12, top: 12, pointerEvents: "none" }}
              />
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>Tên vai trò</div>
            <input
              style={inputStyle}
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>Độ ưu tiên</div>
            <input
              style={inputStyle}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>Tình trạng</div>
            <div style={{ position: "relative" }}>
              <select
                style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 30 }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Tất cả</option>
                <option value="active">Kích hoạt</option>
                <option value="inactive">Khóa</option>
              </select>
              <ChevronDown
                size={16}
                color={COLORS.headerTextBlue}
                style={{ position: "absolute", right: 12, top: 12, pointerEvents: "none" }}
              />
            </div>
          </div>
        </div>

        {/* Section Header */}
        <SectionHeader title="Danh sách vai trò" />

        {/* Data Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 140, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}>
                  Hành động
                </th>
                <th style={{ ...thStyle, width: 60 }}>STT</th>
                <th style={thStyle}>Vai trò</th>
                <th style={thStyle}>Ngày tạo</th>
                <th style={{ ...thStyle, width: "35%" }}>Mô tả</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {rolesData.map((r) => (
                <tr key={r.stt}>
                  <td style={tdStyle}>
                    <button
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        height: 32,
                        padding: "0 14px",
                        background: COLORS.headerTextBlue,
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        fontSize: 12.5,
                        fontWeight: 500,
                        cursor: "pointer",
                      }}
                    >
                      <Settings size={13} /> Hành động <ChevronDown size={12} />
                    </button>
                  </td>
                  <td style={tdStyle}>{r.stt}</td>
                  <td style={tdStyle}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontWeight: 500 }}>{r.role}</span>
                      {r.tag && (
                        <span
                          style={{
                            background: r.tag.bg,
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "2px 8px",
                            borderRadius: 4,
                          }}
                        >
                          {r.tag.label}
                        </span>
                      )}
                    </div>
                  </td>
                  <td style={tdStyle}>{r.created}</td>
                  <td style={{ ...tdStyle, color: "#555" }}>{r.description}</td>
                  <td style={tdStyle}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination total={rolesData.length} />
      </Panel>
    </div>
  );
}

export default RoleManagementPage;
