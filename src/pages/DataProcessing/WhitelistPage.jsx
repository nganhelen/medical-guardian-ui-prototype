import React from "react";
import { COLORS } from "../../constants/colors";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import ToolbarButton from "../../components/ToolbarButton";
import Pagination from "../../components/Pagination";
import { Plus, XIcon, Search } from 'lucide-react';

const whitelistData = [
  { domain: "saigonreview.vn", created: "16/03/2026" },
  { domain: "nld.com.vn", created: "16/03/2026" },
  { domain: "tuoitre.vn", created: "16/03/2026" },
  { domain: "shopee.vn", created: "16/03/2026" },
  { domain: "pharmacity.vn", created: "16/03/2026" },
  { domain: "nhathuoclongchau.com.vn", created: "16/03/2026" },
  { domain: "thanhnien.vn", created: "16/03/2026" },
  { domain: "vnexpress.net", created: "16/03/2026" },
  { domain: "youtube.com", created: "16/03/2026" },
];

function WhitelistPage() {
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

  return (
    <div>
      <div style={{ display: "flex", marginBottom: 4 }}>
        <ToolbarButton icon={Plus} label="Thêm" />
        <ToolbarButton icon={XIcon} label="Xóa" />
        <ToolbarButton icon={Search} label="Tìm kiếm" />
      </div>
      <Breadcrumb current="Quản lý whitelist" />
      <Panel>
        <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 20 }}>Quản lý whitelist</div>

        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 14, color: "#333", marginBottom: 8 }}>Tên miền</div>
          <input
            style={{
              width: "100%",
              height: 42,
              border: "1px solid #d5d8dd",
              borderRadius: 4,
              padding: "0 14px",
              fontSize: 14,
              outline: "none",
              boxSizing: "border-box",
              color: "#333",
            }}
          />
        </div>

        <SectionHeader title="Danh sách whitelist" />

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 44, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, textAlign: "center" }}>
                  <input type="checkbox" style={{ width: 16, height: 16, cursor: "pointer", accentColor: COLORS.headerTextBlue }} />
                </th>
                <th style={thStyle}>STT</th>
                <th style={thStyle}>Lĩnh vực</th>
                <th style={{ ...thStyle, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {whitelistData.map((r, i) => (
                <tr key={r.domain}>
                  <td style={tdStyle}>
                    <input type="checkbox" />
                  </td>
                  <td style={tdStyle}>{i + 1}</td>
                  <td style={tdStyle}>{r.domain}</td>
                  <td style={tdStyle}>{r.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total={whitelistData.length} />
      </Panel>
    </div>
  );
}

export default WhitelistPage;