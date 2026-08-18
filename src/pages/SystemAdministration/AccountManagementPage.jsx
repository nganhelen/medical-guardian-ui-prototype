import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import PageTitleBar from "../../components/PageTitleBar";
import Panel from "../../components/Panel";
import Pagination from "../../components/Pagination";
import { Plus, Search, Settings, ChevronDown, ChevronRight, User } from "lucide-react";

const accountRowsData = [
  {
    stt: 1,
    username: "admin",
    userCode: "EMP000001046572",
    fullName: "ADMIN",
    role: "Admin",
  },
  {
    stt: 2,
    username: "admin01",
    userCode: "EMP000001046542",
    fullName: "admin",
    role: "",
  },
  {
    stt: 3,
    username: "thambch_tv",
    userCode: "EMP000001046600",
    fullName: "Bùi Cao Hồng Thắm",
    role: "Thanh tra",
  },
  {
    stt: 4,
    username: "longbnt_tv",
    userCode: "EMP000001046584",
    fullName: "Bùi Nguyễn Thành Long",
    role: "Thanh tra",
  },
  {
    stt: 5,
    username: "nhibpt_tv",
    userCode: "EMP000001046622",
    fullName: "Bùi Phan Thảo Nhi",
    role: "Thanh tra",
  },
  {
    stt: 6,
    username: "sonbv_tv",
    userCode: "EMP000001046601",
    fullName: "Bùi Văn Sơn",
    role: "Thanh tra",
  },
  {
    stt: 7,
    username: "maict_tv",
    userCode: "EMP000001046623",
    fullName: "Châu Tuyết Mai",
    role: "Thanh tra",
  },
  {
    stt: 8,
    username: "anhdh_tv",
    userCode: "EMP000001046628",
    fullName: "Đoàn Huỳnh Anh",
    role: "Thanh tra",
  },
  {
    stt: 9,
    username: "chidtq_tv",
    userCode: "EMP000001046624",
    fullName: "Đoàn Thị Quế Chi",
    role: "Thanh tra",
  },
  {
    stt: 10,
    username: "trangdt_tv",
    userCode: "EMP000001046632",
    fullName: "Đoàn Thị Trang",
    role: "Thanh tra",
  },
];

function AccountManagementPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

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

  return (
    <div>
      {/* Top Header Bar */}
      <PageTitleBar
        title="TÀI KHOẢN"
        subtitle="Quản lý tài khoản"
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
            <Plus size={15} /> Tạo người dùng
          </button>
        }
      />

      <Panel style={{ padding: "20px 24px" }}>
        {/* Search Bar */}
        <div style={{ display: "flex", gap: 0, marginBottom: 14 }}>
          <input
            style={{
              flex: 1,
              height: 42,
              border: "1px solid #d5d8dd",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              padding: "0 14px",
              fontSize: 13,
              outline: "none",
              boxSizing: "border-box",
            }}
            placeholder="Từ khóa"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button
            style={{
              width: 50,
              height: 42,
              background: COLORS.headerTextBlue,
              color: "#fff",
              border: "none",
              borderRadius: "0 4px 4px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Search size={16} />
          </button>
        </div>

        {/* Toggle Advanced Search */}
        <div
          onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12.5,
            color: "#7E8299",
            cursor: "pointer",
            marginBottom: 20,
            userSelect: "none",
          }}
        >
          {showAdvancedSearch ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <span>Hiển thị tìm kiếm nâng cao</span>
        </div>

        {showAdvancedSearch && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              padding: 16,
              background: "#F8FAFC",
              borderRadius: 6,
              marginBottom: 20,
              border: "1px solid #E2E8F0",
            }}
          >
            <div>
              <div style={{ fontSize: 12.5, color: "#333", marginBottom: 6 }}>Vai trò</div>
              <select style={{ width: "100%", height: 36, border: "1px solid #d5d8dd", borderRadius: 4, padding: "0 10px", fontSize: 12.5 }}>
                <option value="">Tất cả</option>
                <option value="admin">Admin</option>
                <option value="thanhtra">Thanh tra</option>
              </select>
            </div>
            <div>
              <div style={{ fontSize: 12.5, color: "#333", marginBottom: 6 }}>Đơn vị</div>
              <input style={{ width: "100%", height: 36, border: "1px solid #d5d8dd", borderRadius: 4, padding: "0 10px", fontSize: 12.5, boxSizing: "border-box" }} />
            </div>
            <div>
              <div style={{ fontSize: 12.5, color: "#333", marginBottom: 6 }}>Trạng thái</div>
              <select style={{ width: "100%", height: 36, border: "1px solid #d5d8dd", borderRadius: 4, padding: "0 10px", fontSize: 12.5 }}>
                <option value="">Tất cả</option>
                <option value="active">Kích hoạt</option>
              </select>
            </div>
          </div>
        )}

        {/* Data Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 140, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}>
                  Hành động
                </th>
                <th style={{ ...thStyle, width: 60 }}>STT</th>
                <th style={thStyle}>Tên đăng nhập</th>
                <th style={thStyle}>Mã người dùng</th>
                <th style={thStyle}>Họ và tên</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
                  Vai trò
                </th>
              </tr>
            </thead>
            <tbody>
              {accountRowsData.map((r) => (
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
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#FED7AA",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#EA580C",
                        }}
                      >
                        <User size={13} />
                      </div>
                      <span style={{ fontWeight: 500 }}>{r.username}</span>
                    </div>
                  </td>
                  <td style={tdStyle}>{r.userCode}</td>
                  <td style={tdStyle}>{r.fullName}</td>
                  <td style={tdStyle}>{r.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination total={accountRowsData.length} />
      </Panel>
    </div>
  );
}

export default AccountManagementPage;
