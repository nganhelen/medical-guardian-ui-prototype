import React from "react";
import { COLORS } from "../../constants/colors";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import ProcessToolbar from "../../components/ProcessToolbar";
import ProcessSearchBar from "../../components/ProcessSearchBar";
import ProcessFilterToggle from "../../components/ProcessFilterToggle";
import ResultListHeader from "../../components/ResultListHeader";
import ResultRow from "../../components/ResultRow";
import ResultTitle from "../../components/ResultTitle";
import FieldLine from "../../components/FieldLine";
import ResultParagraph from "../../components/ResultParagraph";

const extractResultsData = [
  {
    keyword: "tiêm filler hcm",
    datetime: "15/07/2026 10:27:43",
    url: "https://www.facebook.com/ads/library/?id=883454727658619",
    topic: "tiêm filler",
    result: "Không tìm được thông tin",
    status: "Chưa xử lí",
    content:
      "Cắt mí - Bệnh viện TH Thẩm mỹ Dr. Hải Lê Beauty Salon ------------------------------------------------------------- Cắt mí - Bệnh viện TH Thẩm mỹ Dr. Hải Lê",
  },
  {
    keyword: "tiêm filler hcm",
    datetime: "15/07/2026 10:27:30",
    url: "https://www.facebook.com/ads/library/?id=947395718104943",
    topic: "tiêm filler",
    result: "Không tìm được thông tin",
    status: "Chưa xử lí",
    content:
      "Huyen Thanh Korea Win Clinic - Filler Botox Phòng khám 1. 722 người thích ------------------------------------------------------------- Huyen Thanh Korea Win Clinic - Filler Botox",
  },
  {
    keyword: "tiêm filler hcm",
    datetime: "15/07/2026 10:27:30",
    url: "https://www.facebook.com/ads/library/?id=2457257261406320",
    topic: "tiêm filler",
    result: "Không tìm được thông tin",
    status: "Chưa xử lí",
    content:
      "Phòng khám Da liễu & Thẩm mỹ Sài Gòn ------------------------------------------------------------- Phòng khám Da liễu & Thẩm mỹ Sài Gòn",
  },
];

function ExtractResultsPage() {
  return (
    <div>
      <ProcessToolbar />
      <Breadcrumb current="Kết quả trích xuất và đánh giá" />
      <Panel style={{ padding: 22 }}>
        <ProcessSearchBar extra={<ProcessFilterToggle label="Lọc theo công cụ và đường dẫn" />} />
        <SectionHeader title="Danh mục tin thu thập" />
        <div style={{ border: "1px solid " + COLORS.rowBorder, borderRadius: 6, overflow: "hidden" }}>
          <ResultListHeader />
          {extractResultsData.map((r, i) => (
            <ResultRow key={i} index={i + 1} isLast={i === extractResultsData.length - 1}>
              <ResultTitle>Từ khóa: {r.keyword}</ResultTitle>
              <div style={{ fontSize: 13.5, color: "#333", marginBottom: 7 }}>{r.datetime}</div>
              <FieldLine label="URL" value={r.url} isLink />
              <FieldLine label="Chủ đề" value={r.topic} />
              <FieldLine label="Kết quả" value={r.result} wholeColor={COLORS.errorRed} />
              <FieldLine label="Trạng thái" value={r.status} valueColor={COLORS.mutedGray} />
              <ResultParagraph>{r.content}</ResultParagraph>
            </ResultRow>
          ))}
        </div>
      </Panel>
    </div>
  );
}

export default ExtractResultsPage;