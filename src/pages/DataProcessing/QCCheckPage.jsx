import React from "react";
import { COLORS } from "../../constants/colors";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import Pagination from "../../components/Pagination";
import { Plus, Link2 } from 'lucide-react';

function QCCheckPage() {
  const fieldLabel = { fontSize: 14, color: "#333", marginBottom: 8 };
  const grayInput = {
    height: 42,
    background: COLORS.pillGray,
    border: "1px solid " + COLORS.pillBorder,
    borderRadius: 4,
    padding: "0 14px",
    fontSize: 14,
    color: "#8a8f98",
    outline: "none",
    boxSizing: "border-box",
  };
  const blueBtn = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    height: 42,
    padding: "0 18px",
    background: COLORS.headerTextBlue,
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 13.5,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
  };
  const thStyle = {
    background: COLORS.tableHeaderBg,
    color: COLORS.headerTextBlue,
    fontWeight: 700,
    fontSize: 13.5,
    textAlign: "left",
    padding: "12px 14px",
    whiteSpace: "nowrap",
  };

  const attachments = [
    { label: "Ảnh đính kèm" },
    { label: "Ảnh GPHĐ và CCHN" },
    { label: "Ảnh chụp màn hình" },
  ];

  return (
    <div>
      <Breadcrumb current="Kiểm tra trước thông tin quảng cáo" />
      <div style={{ textAlign: "center", fontWeight: 700, fontSize: 22, color: "#1a1a1a", marginBottom: 26 }}>
        Kiểm tra trước thông tin quảng cáo
      </div>

      <div style={{ marginBottom: 26 }}>
        <div style={fieldLabel}>
          Ảnh hoặc Url <span style={{ color: COLORS.errorRed }}>*</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", position: "relative" }}>
            <Plus size={16} color="#999" style={{ position: "absolute", left: 14 }} />
            <input
              style={{
                width: "100%",
                height: 42,
                border: "1px solid #d5d8dd",
                borderRadius: 4,
                padding: "0 14px 0 40px",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                color: "#333",
              }}
              placeholder="Nhập ảnh hoặc Url"
            />
          </div>
          <button style={blueBtn}>
            <Link2 size={14} /> Lấy nội dung
          </button>
        </div>
      </div>

      <Panel>
        <div style={{ fontSize: 15, color: "#333", marginBottom: 10 }}>Nội dung</div>
        <textarea
          style={{
            width: "100%",
            minHeight: 170,
            background: COLORS.pillGray,
            border: "1px solid " + COLORS.pillBorder,
            borderRadius: 4,
            padding: 14,
            fontSize: 14,
            color: "#333",
            outline: "none",
            boxSizing: "border-box",
            resize: "vertical",
            fontFamily: "inherit",
          }}
        />

        <div style={{ display: "flex", gap: 24, marginTop: 20, marginBottom: 26 }}>
          {attachments.map((a) => (
            <div key={a.label} style={{ flex: 1 }}>
              <div style={fieldLabel}>{a.label}</div>
              <div style={{ display: "flex", gap: 10 }}>
                <input style={{ ...grayInput, flex: 1 }} readOnly />
                <button style={{ ...blueBtn, padding: "0 16px" }}>Xem ảnh</button>
              </div>
            </div>
          ))}
        </div>

        <SectionHeader title="Bảng kiểm tra GPHD, GPHN cơ sở, bác sĩ" />
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, width: "18%" }}>Loại</th>
              <th style={{ ...thStyle, width: "34%" }}>Thông tin trích xuất</th>
              <th style={thStyle}>Thông tin tìm kiếm trong cơ sở dữ liệu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={3}
                style={{
                  textAlign: "center",
                  height: 48,
                  padding: "15px 0",
                  background: "#f1f1f2",
                  color: "#071437",
                  fontSize: 13,
                }}
              >
                Không có dữ liệu
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination total={0} showPageNumber={false} />
      </Panel>
    </div>
  );
}

export default QCCheckPage;