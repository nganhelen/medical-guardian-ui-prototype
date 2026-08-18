import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import { Plus, Folder, ChevronRight, ChevronDown, User, Building, Settings } from "lucide-react";

function OrgChartPage() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [rightTab, setRightTab] = useState("info"); // "info" | "users"
  const [expandedNodes, setExpandedNodes] = useState({ root: true });

  const toggleNode = (key) => {
    setExpandedNodes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const orgTree = [
    {
      id: "root",
      code: "SYT_1000",
      name: "Sở y tế",
      tag: "Đơn vị",
      children: [
        { id: "tt", code: "SYT_1001", name: "Thanh tra Sở Y Tế", tag: "Phòng ban", members: 12 },
        { id: "nvy", code: "SYT_1002", name: "Phòng Nghiệp vụ Y", tag: "Phòng ban", members: 8 },
        { id: "qld", code: "SYT_1003", name: "Phòng Quản lý Dược", tag: "Phòng ban", members: 6 },
        { id: "tccb", code: "SYT_1004", name: "Phòng Tổ chức Cán bộ", tag: "Phòng ban", members: 5 },
      ],
    },
  ];

  return (
    <div>
      <Breadcrumb current="Cơ cấu Tổ chức" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 20, alignItems: "start" }}>
        {/* Left Panel: Tree Structure */}
        <Panel style={{ padding: "20px 22px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: "1px solid #EEF0F4",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 700, color: "#071437" }}>
              Cơ cấu Tổ chức
            </span>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 32,
                padding: "0 12px",
                background: "#fff",
                color: COLORS.headerTextBlue,
                border: "1px solid " + COLORS.headerTextBlue,
                borderRadius: 4,
                fontSize: 12.5,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              <Plus size={13} /> Thêm đơn vị gốc
            </button>
          </div>

          {/* Tree View */}
          <div>
            {orgTree.map((root) => {
              const isExpanded = expandedNodes[root.id];
              const isSelected = selectedUnit?.id === root.id;
              return (
                <div key={root.id}>
                  <div
                    onClick={() => {
                      setSelectedUnit(root);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 10px",
                      borderRadius: 6,
                      background: isSelected ? "#F0F5FF" : "transparent",
                      cursor: "pointer",
                      fontSize: 13,
                      color: "#333",
                    }}
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleNode(root.id);
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {isExpanded ? <ChevronDown size={16} color="#777" /> : <ChevronRight size={16} color="#777" />}
                    </div>
                    <Folder size={18} fill="#F59E0B" color="#D97706" />
                    <span style={{ fontWeight: 600 }}>{root.code} - {root.name}</span>
                    <span
                      style={{
                        background: "#22C55E",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: 10,
                        marginLeft: 4,
                      }}
                    >
                      {root.tag}
                    </span>
                  </div>

                  {/* Children */}
                  {isExpanded && root.children && (
                    <div style={{ marginLeft: 28, marginTop: 4, display: "flex", flexDirection: "column", gap: 4 }}>
                      {root.children.map((child) => {
                        const isChildSelected = selectedUnit?.id === child.id;
                        return (
                          <div
                            key={child.id}
                            onClick={() => setSelectedUnit(child)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              padding: "6px 10px",
                              borderRadius: 6,
                              background: isChildSelected ? "#F0F5FF" : "transparent",
                              cursor: "pointer",
                              fontSize: 13,
                              color: "#333",
                            }}
                          >
                            <Folder size={16} fill="#FCD34D" color="#F59E0B" />
                            <span>{child.code} - {child.name}</span>
                            <span
                              style={{
                                background: "#3577DB",
                                color: "#fff",
                                fontSize: 10.5,
                                fontWeight: 500,
                                padding: "1px 6px",
                                borderRadius: 8,
                                marginLeft: 4,
                              }}
                            >
                              {child.tag}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Panel>

        {/* Right Panel: Detail & Members */}
        <Panel style={{ padding: "20px 24px", minHeight: 280 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#071437", marginBottom: 18 }}>
            {selectedUnit ? `${selectedUnit.code} - ${selectedUnit.name}` : "No organization selected"}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #EEF0F4", paddingBottom: 10, marginBottom: 16 }}>
            <button
              onClick={() => setRightTab("info")}
              style={{
                padding: "6px 16px",
                borderRadius: 4,
                border: "none",
                background: rightTab === "info" ? "#EBF3FC" : "transparent",
                color: rightTab === "info" ? "#3577DB" : "#555",
                fontWeight: rightTab === "info" ? 600 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Thông tin
            </button>
            <button
              onClick={() => setRightTab("users")}
              style={{
                padding: "6px 16px",
                borderRadius: 4,
                border: "none",
                background: rightTab === "users" ? "#EBF3FC" : "transparent",
                color: rightTab === "users" ? "#3577DB" : "#555",
                fontWeight: rightTab === "users" ? 600 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Người dùng
            </button>
          </div>

          {/* Content */}
          {!selectedUnit ? (
            <div style={{ padding: "20px 0", color: "#7E8299", fontSize: 13 }}>
              Chọn Cơ cấu Tổ chức để xem thành viên.
            </div>
          ) : (
            <div style={{ padding: "10px 0" }}>
              {rightTab === "info" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 12.5, color: "#7E8299", marginBottom: 4 }}>Mã đơn vị</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: "#071437" }}>{selectedUnit.code}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, color: "#7E8299", marginBottom: 4 }}>Tên đơn vị</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: "#071437" }}>{selectedUnit.name}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, color: "#7E8299", marginBottom: 4 }}>Loại</div>
                    <div style={{ fontSize: 13.5, fontWeight: 500, color: "#071437" }}>{selectedUnit.tag}</div>
                  </div>
                </div>
              ) : (
                <div style={{ color: "#7E8299", fontSize: 13 }}>
                  Danh sách người dùng thuộc đơn vị này (0 thành viên).
                </div>
              )}
            </div>
          )}
        </Panel>
      </div>
    </div>
  );
}

export default OrgChartPage;
