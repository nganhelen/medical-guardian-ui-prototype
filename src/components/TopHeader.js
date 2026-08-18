import React from "react";
import { COLORS } from "../constants/colors";
import { AVATAR_SRC, LOGO_SRC } from "../assets/icons";
import { Menu as MenuIcon } from 'lucide-react';

function TopHeader() {
  return (
    <header
      style={{
        position: "fixed",
        top: 16,
        left: 16,
        right: 16,
        height: 72,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid #ffffff",
        borderRadius: 8,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "0 1px 9px -3px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={LOGO_SRC}
            alt="Sở Y tế TP. Hồ Chí Minh"
            style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "contain", flexShrink: 0 }}
          />
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1a2b4a" }}>SỞ Y TẾ</div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#1a2b4a" }}>TP. HỒ CHÍ MINH</div>
          </div>
        </div>
        <MenuIcon size={21} strokeWidth={2.75} color="#29346B" />
        <div style={{ fontWeight: 700, fontSize: 22, color: "#1a1a1a", marginLeft: 8 }}>
          AI phát hiện dấu hiệu vi phạm trong y tế
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={AVATAR_SRC}
          alt="admin"
          style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
        />
        <div style={{ lineHeight: 1.25 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>admin</div>
          <div style={{ fontSize: 12, color: "#8891a5" }}>Chức vụ</div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;