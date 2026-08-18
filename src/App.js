import { useState } from "react";

import DashboardPage from "./pages/Dashboard/DashboardPage";
import CookiesPage from "./pages/SystemAdministration/CookiesPage";
import SystemParameterPage from "./pages/SystemAdministration/SystemParameterPage";
import PageInfoPage from "./pages/SystemAdministration/PageInfoPage";
import OrgChartPage from "./pages/SystemAdministration/OrgChartPage";
import RoleManagementPage from "./pages/SystemAdministration/RoleManagementPage";
import AccountManagementPage from "./pages/SystemAdministration/AccountManagementPage";
import UsersPage from "./pages/SystemAdministration/UsersPage";
import ActivityLogsPage from "./pages/SystemAdministration/ActivityLogsPage";

import LanguagePage from "./pages/SystemSettings/LanguagePage";
import SettingsPage from "./pages/SystemSettings/SettingsPage";
import MaintenancePage from "./pages/SystemSettings/MaintenancePage";
import InterfaceSettingPage from "./pages/InterfaceSettings/InterfaceSettingPage";
import SchedulePage from "./pages/DataCollection/SchedulePage";
import CollectResultsPage from "./pages/DataProcessing/CollectResultsPage";
import ExtractResultsPage from "./pages/DataProcessing/ExtractResultsPage";
import FilterResultsPage from "./pages/DataProcessing/FilterResultsPage";
import QCCheckPage from "./pages/DataProcessing/QCCheckPage";
import ViolationCategoriesPage from "./pages/DataProcessing/ViolationCategoriesPage";
import WhitelistPage from "./pages/DataProcessing/WhitelistPage";

import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("collect-results");
  const [openMenus, setOpenMenus] = useState(["admin", "process"]);

  const toggleMenu = (key) => {
    setOpenMenus((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  let page;
  if (active === "dashboard") page = <DashboardPage />;
  else if (active === "params") page = <SystemParameterPage />;
  else if (active === "cookies") page = <CookiesPage />;
  else if (active === "pageinfo") page = <PageInfoPage />;
  else if (active === "orgchart") page = <OrgChartPage />;
  else if (active === "roles") page = <RoleManagementPage />;
  else if (active === "accounts") page = <AccountManagementPage />;
  else if (active === "users") page = <UsersPage />;
  else if (active === "logs") page = <ActivityLogsPage />;
  else if (active === "language") page = <LanguagePage />;
  else if (active === "settings-general") page = <SettingsPage />;
  else if (active === "maintenance") page = <MaintenancePage />;
  else if (active === "theme") page = <InterfaceSettingPage />;
  else if (active === "collect-results") page = <CollectResultsPage />;
  else if (active === "filter-results") page = <FilterResultsPage />;
  else if (active === "extract-results") page = <ExtractResultsPage />;
  else if (active === "qc-check") page = <QCCheckPage />;
  else if (active === "violation-categories") page = <ViolationCategoriesPage />;
  else if (active === "whitelist") page = <WhitelistPage />;
  else page = <SchedulePage />;

  return (
    <div
      style={{
        fontFamily: "'Montserrat', 'Segoe UI', Roboto, Arial, sans-serif",
        background: "#eef0f2",
        minHeight: "100vh",
        fontSize: 12,
        color: "#071437",
        lineHeight: "18px",
        position: "relative",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');`}</style>
      <TopHeader />
      <Sidebar active={active} onSelect={setActive} openMenus={openMenus} toggleMenu={toggleMenu} />
      <div
        style={{
          marginLeft: 257,
          marginTop: 106,
          paddingRight: 16,
          paddingBottom: 16,
          minHeight: "calc(100vh - 106px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ padding: "0 16px" }}>{page}</div>
        <Footer />
      </div>
    </div>
  );
}
