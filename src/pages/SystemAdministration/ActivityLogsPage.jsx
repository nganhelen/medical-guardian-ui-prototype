import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "../../components/Pagination";
import { Search, RotateCw, CheckCircle2, ChevronDown, ChevronsUpDown, FileSpreadsheet } from "lucide-react";

const logsData = [
  {
    id: 1,
    user: "admin",
    unit: "",
    service: "OrganizationUnitController",
    action: "ORGANIZATION_UNIT_Search",
    duration: "3ms",
    ip: "192.168.1.1",
    status: true,
  },
  {
    id: 2,
    user: "admin",
    unit: "",
    service: "OrganizationUnitController",
    action: "ORGANIZATION_UNIT_Search",
    duration: "4ms",
    ip: "192.168.1.1",
    status: true,
  },
  {
    id: 3,
    user: "admin",
    unit: "",
    service: "OrganizationUnitController",
    action: "ORGANIZATION_UNIT_Search",
    duration: "3ms",
    ip: "192.168.1.1",
    status: true,
  },
  {
    id: 4,
    user: "admin",
    unit: "",
    service: "EmployeeController",
    action: "CM_EMPLOYEE_Search",
    duration: "82ms",
    ip: "192.168.1.1",
    status: true,
  },
  {
    id: 5,
    user: "admin",
    unit: "",
    service: "OrganizationUnitController",
    action: "ORGANIZATION_UNIT_Search",
    duration: "20ms",
    ip: "192.168.1.1",
    status: true,
  },
  {
    id: 6,
    user: "admin",
    unit: "",
    service: "OrganizationUnitController",
    action: "ORGANIZATION_UNIT_Search",
    duration: "20ms",
    ip: "192.168.1.1",
    status: true,
  },
  {
    id: 7,
    user: "admin",
    unit: "",
    service: "RoleAppService",
    action: "GetRoles",
    duration: "221ms",
    ip: "192.168.1.1",
    status: true,
  },
];

function ActivityLogsPage() {
  const [dateRange, setDateRange] = useState("18/08/2026 - 18/08/2026");
  const [username, setUsername] = useState("");
  const [unitFilter, setUnitFilter] = useState("");

  const thStyle = {
    background: COLORS.tableHeaderBg,
    color: COLORS.headerTextBlue,
    fontWeight: 600,
    fontSize: 13,
    textAlign: "left",
    padding: "13px 14px",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
  };

  const tdStyle = {
    padding: "11px 14px",
    fontSize: 13,
    color: "#333",
    borderBottom: "1px solid " + COLORS.rowBorder,
    verticalAlign: "middle",
    whiteSpace: "nowrap",
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

  const renderSortableHeader = (label) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
      <span>{label}</span>
      <ChevronsUpDown size={14} color={COLORS.headerTextBlue} />
    </div>
  );

  return (
    <div>
      <Breadcrumb current="Nhật ký kiểm tra" />

      <Panel style={{ padding: "20px 24px" }}>
        {/* Top Tab & Action Buttons Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #EEF0F4",
            paddingBottom: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              padding: "6px 14px",
              background: "#EBF3FC",
              color: "#3577DB",
              fontWeight: 600,
              fontSize: 13,
              borderRadius: 4,
            }}
          >
            Nhật ký hoạt động
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 38,
                padding: "0 16px",
                background: "#22C55E",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <FileSpreadsheet size={15} /> Xuất Excel
            </button>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 38,
                padding: "0 16px",
                background: COLORS.headerTextBlue,
                color: "#fff",
                border: "none",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <RotateCw size={14} /> Tìm kiếm
            </button>
          </div>
        </div>

        {/* Filter Row 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Phạm vi ngày
            </div>
            <input
              style={inputStyle}
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            />
          </div>

          <div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
              Tên đăng nhập
            </div>
            <input
              style={inputStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Row 2 */}
        <div style={{ marginBottom: 24, width: "calc(50% - 12px)" }}>
          <div style={{ fontSize: 13, color: "#333", marginBottom: 7, fontWeight: 500 }}>
            Đơn vị
          </div>
          <div style={{ position: "relative" }}>
            <select
              style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 30 }}
              value={unitFilter}
              onChange={(e) => setUnitFilter(e.target.value)}
            >
              <option value=""></option>
              <option value="syt">SYT_1000 - Sở y tế</option>
            </select>
            <ChevronDown
              size={16}
              color={COLORS.headerTextBlue}
              style={{ position: "absolute", right: 12, top: 12, pointerEvents: "none" }}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 44, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }} />
                <th style={{ ...thStyle, width: 44 }} />
                <th style={thStyle}>{renderSortableHeader("Tên đăng nhập")}</th>
                <th style={thStyle}>Đơn vị</th>
                <th style={thStyle}>Dịch vụ</th>
                <th style={thStyle}>Hoạt động</th>
                <th style={thStyle}>{renderSortableHeader("Khoảng thời gian")}</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
                  Địa chỉ IP
                </th>
              </tr>
            </thead>
            <tbody>
              {logsData.map((r) => (
                <tr key={r.id}>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 4,
                        border: "1px solid #E2E8F0",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: "#7E8299",
                      }}
                    >
                      <Search size={13} />
                    </div>
                  </td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    <CheckCircle2 size={16} color="#22C55E" />
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>{r.user}</td>
                  <td style={tdStyle}>{r.unit}</td>
                  <td style={tdStyle}>{r.service}</td>
                  <td style={tdStyle}>{r.action}</td>
                  <td style={tdStyle}>{r.duration}</td>
                  <td style={tdStyle}>{r.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination total={logsData.length} />
      </Panel>
    </div>
  );
}

export default ActivityLogsPage;
