import React from "react";
import { COLORS } from "../../constants/colors";
import { cookieRows } from "../../data/mock/cookieRows";
import ToolbarButton from "../../components/ToolbarButton";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import Pagination from "../../components/Pagination";
import { Plus, Pencil, XIcon, Search } from 'lucide-react';

function CookiesPage() {
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
  };
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 4 }}>
        <ToolbarButton icon={Plus} label="Thêm" />
        <ToolbarButton icon={Pencil} label="Chỉnh sửa" />
        <ToolbarButton icon={XIcon} label="Xóa" />
        <ToolbarButton icon={Search} label="Tìm kiếm" />
      </div>
      <Breadcrumb current="Quản lý cookies" />
      <Panel>
        <SectionHeader title="Danh sách cookies" />
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 44, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, textAlign: "center" }}>
                  <input type="checkbox" style={{ width: 16, height: 16, cursor: "pointer", accentColor: COLORS.headerTextBlue }} />
                </th>
                <th style={thStyle}>STT</th>
                <th style={thStyle}>Mã định danh</th>
                <th style={thStyle}>Nội dung cookies</th>
                <th style={thStyle}>LastUsed</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>IsLive</th>
              </tr>
            </thead>
            <tbody>
              {cookieRows.map((r) => (
                <tr key={r.stt}>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    <input type="checkbox" style={{ width: 16, height: 16, cursor: "pointer", accentColor: COLORS.headerTextBlue }} />
                  </td>
                  <td style={tdStyle}>{r.stt}</td>
                  <td style={tdStyle}>{r.maDinhDanh}</td>
                  <td style={tdStyle}>{r.noiDung}</td>
                  <td style={tdStyle}>{r.lastUsed}</td>
                  <td style={tdStyle}>{r.isLive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total={9} />
      </Panel>
    </div>
  );
}

export default CookiesPage;