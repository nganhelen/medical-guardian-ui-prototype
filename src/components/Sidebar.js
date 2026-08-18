import React from "react";
import { COLORS } from "../constants/colors";
import { NAV } from "../data/mock/navigation";
import { ChevronDown, ChevronRight } from 'lucide-react';

function Sidebar({ active, onSelect, openMenus, toggleMenu }) {
  const itemBase = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: 207,
    height: 41,
    padding: "8px 12px",
    borderRadius: 5.7,
    cursor: "pointer",
    fontSize: 12,
    fontWeight: 500,
    boxSizing: "border-box",
  };
  return (
    <nav
      style={{
        position: "fixed",
        top: 106,
        left: 16,
        bottom: 16,
        width: 225,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 1px 9px -3px rgba(0,0,0,0.05)",
        zIndex: 106,
        overflowY: "auto",
        padding: "9px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {NAV.map((item) => {
          const hasChildren = !!item.children;
          const childActive = hasChildren && item.children.some((c) => c.key === active);
          const isOpen = openMenus.includes(item.key) || childActive;
          const isActiveParent = active === item.key || childActive;
          return (
            <div key={item.key}>
              <div
                onClick={() => (hasChildren ? toggleMenu(item.key) : onSelect(item.key))}
                style={{
                  ...itemBase,
                  color: isActiveParent ? COLORS.sidebarActiveText : COLORS.sidebarText,
                  background: isActiveParent ? COLORS.sidebarActiveBg : "transparent",
                }}
              >
                <img src={item.iconSrc} alt="" style={{ width: 24, height: 24, objectFit: "contain", flexShrink: 0 }} />
                <span style={{ flex: 1 }}>{item.label}</span>
                {hasChildren &&
                  (isOpen ? <ChevronDown size={14} color="#777" /> : <ChevronRight size={14} color="#777" />)}
              </div>
              {hasChildren && isOpen && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    background: "#F6F8FD",
                    borderRadius: 5.7,
                    padding: "4px 0",
                    marginTop: 2,
                  }}
                >
                  {item.children.map((child) => {
                    const isActive = active === child.key;
                    return (
                      <div
                        key={child.key}
                        onClick={() => onSelect(child.key)}
                        style={{
                          ...itemBase,
                          width: "auto",
                          height: 36,
                          paddingLeft: 43,
                          borderLeft: isActive ? "2px solid " + COLORS.sidebarActiveText : "2px solid transparent",
                          color: isActive ? COLORS.sidebarActiveText : "#444",
                          background: "transparent",
                          fontWeight: isActive ? 600 : 400,
                          borderRadius: 0,
                        }}
                      >
                        {child.label}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;