import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import PageTitleBar from "../../components/PageTitleBar";
import Panel from "../../components/Panel";
import Pagination from "../../components/Pagination";
import { Plus, Search, Settings, ChevronDown, User, Mail, Phone } from "lucide-react";

const usersData = [
  {
    stt: 1,
    fullName: "ADMIN",
    username: "admin",
    email: "admin@medguardian.vn",
    phone: "0901234567",
    unit: "Sở Y Tế TP.HCM",
    status: "Kích hoạt",
    created: "26/04/2024",
  },
  {
    stt: 2,
    fullName: "Bùi Cao Hồng Thắm",
    username: "thambch_tv",
    email: "tham.bui@medguardian.vn",
    phone: "0912345678",
    unit: "Thanh tra Sở Y Tế",
    status: "Kích hoạt",
    created: "14/03/2025",
  },
  {
    stt: 3,
    fullName: "Bùi Nguyễn Thành Long",
    username: "longbnt_tv",
    email: "long.bui@medguardian.vn",
    phone: "0987654321",
    unit: "Thanh tra Sở Y Tế",
    status: "Kích hoạt",
    created: "14/03/2025",
  },
  {
    stt: 4,
    fullName: "Bùi Phan Thảo Nhi",
    username: "nhibpt_tv",
    email: "nhi.bui@medguardian.vn",
    phone: "0978123456",
    unit: "Thanh tra Sở Y Tế",
    status: "Kích hoạt",
    created: "19/08/2025",
  },
  {
    stt: 5,
    fullName: "Bùi Văn Sơn",
    username: "sonbv_tv",
    email: "son.bui@medguardian.vn",
    phone: "0965432198",
    unit: "Thanh tra Sở Y Tế",
    status: "Kích hoạt",
    created: "19/08/2025",
  },
];

function UsersPage() {
  const [keyword, setKeyword] = useState("");
  const [unitFilter, setUnitFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const thStyle = {
    background: COLORS.tableHeaderBg,
    color: COLORS.headerTextBlue,
    fontWeight: 600,
    fontSize: 13,
    textAlign: "left",
    padding: "13px 14px",
    whiteSpace: "nowrap",
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
    border: "1px solid #d5d8dd",
    borderRadius: 4,
    padding: "0 12px",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div>
      <PageTitleBar
        title="NGƯỜI DÙNG"
        subtitle="Quản lý danh sách người dùng"
        right={
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 40,
              padding: "0 18px",
              background: COLORS.headerTextBlue,
              color: "#fff",
              border: "none",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Plus size={15} /> Thêm người dùng
          </button>
        }
      />

      <Panel style={{ padding: "20px 24px" }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
          <div style={{ flex: 1.5, minWidth: 200 }}>
            <input
              style={{ ...inputStyle, width: "100%" }}
              placeholder="Tìm kiếm theo tên, email, tên đăng nhập..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div style={{ flex: 1, minWidth: 160 }}>
            <select
              style={{ ...inputStyle, width: "100%" }}
              value={unitFilter}
              onChange={(e) => setUnitFilter(e.target.value)}
            >
              <option value="">Tất cả đơn vị</option>
              <option value="syt">Sở Y Tế TP.HCM</option>
              <option value="tt">Thanh tra Sở Y Tế</option>
            </select>
          </div>

          <div style={{ flex: 1, minWidth: 140 }}>
            <select
              style={{ ...inputStyle, width: "100%" }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Kích hoạt</option>
              <option value="inactive">Khóa</option>
            </select>
          </div>

          <button
            style={{
              height: 40,
              padding: "0 18px",
              background: COLORS.headerTextBlue,
              color: "#fff",
              border: "none",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Search size={14} /> Tìm kiếm
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 140, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}>
                  Hành động
                </th>
                <th style={{ ...thStyle, width: 50 }}>STT</th>
                <th style={thStyle}>Họ và tên</th>
                <th style={thStyle}>Tên đăng nhập</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Số điện thoại</th>
                <th style={thStyle}>Đơn vị</th>
                <th style={thStyle}>Trạng thái</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
                  Ngày tạo
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((u) => (
                <tr key={u.stt}>
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
                  <td style={tdStyle}>{u.stt}</td>
                  <td style={tdStyle}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          background: "#E0F2FE",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#0284C7",
                        }}
                      >
                        <User size={13} />
                      </div>
                      <span style={{ fontWeight: 600, color: "#071437" }}>{u.fullName}</span>
                    </div>
                  </td>
                  <td style={tdStyle}>{u.username}</td>
                  <td style={tdStyle}>{u.email}</td>
                  <td style={tdStyle}>{u.phone}</td>
                  <td style={tdStyle}>{u.unit}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        background: "#DCFCE7",
                        color: "#166534",
                        padding: "3px 8px",
                        borderRadius: 4,
                        fontSize: 11.5,
                        fontWeight: 600,
                      }}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td style={tdStyle}>{u.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination total={usersData.length} />
      </Panel>
    </div>
  );
}

export default UsersPage;
