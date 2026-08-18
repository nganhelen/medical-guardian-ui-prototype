import {
  LayoutDashboard,
  Settings,
  Shield,
  Database,
  Workflow,
  Palette,
} from "lucide-react";

import {
  ICON_DASHBOARD,
  ICON_SETTINGS,
  ICON_ADMIN_NAV,
  ICON_COLLECT,
  ICON_PROCESS,
  ICON_THEME,
} from "../../assets/icons";

export const NAV = [
  { key: "dashboard", label: "Dashboard", iconSrc: ICON_DASHBOARD },
  {
    key: "settings",
    label: "Cài đặt hệ thống",
    iconSrc: ICON_SETTINGS,
    children: [
      { key: "language", label: "Ngôn ngữ" },
      { key: "settings-general", label: "Cài đặt" },
      { key: "maintenance", label: "Bảo trì" },
    ],
  },
  {
    key: "admin",
    label: "Quản trị hệ thống",
    iconSrc: ICON_ADMIN_NAV,
    children: [
      { key: "params", label: "Tham số hệ thống" },
      { key: "cookies", label: "Quản lý cookies" },
      { key: "pageinfo", label: "Thông tin trang" },
      { key: "orgchart", label: "Cơ cấu tổ chức" },
      { key: "roles", label: "Quản lý vai trò" },
      { key: "accounts", label: "Quản lý tài khoản" },
      { key: "users", label: "Quản lý danh sách người dùng" },
      { key: "logs", label: "Quản lý nhật ký hoạt động" },
    ],
  },
  { key: "schedule", label: "Quản lý thông tin thu thập", iconSrc: ICON_COLLECT },
  {
    key: "process",
    label: "Xử lý thông tin",
    iconSrc: ICON_PROCESS,
    children: [
      { key: "qc-check", label: "Kiểm tra nhanh QC" },
      { key: "collect-results", label: "Kết quả thu thập tin" },
      { key: "filter-results", label: "Kết quả lọc" },
      { key: "extract-results", label: "Kết quả trích xuất và đánh giá" },
      { key: "violation-categories", label: "Quản lý danh sách phân loại vi phạm" },
      { key: "whitelist", label: "Quản lý whitelist" },
    ],
  },
  { key: "theme", label: "Cài đặt giao diện", iconSrc: ICON_THEME },
];