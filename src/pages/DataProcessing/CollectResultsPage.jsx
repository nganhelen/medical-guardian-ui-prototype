import React from "react";
import { COLORS } from "../../constants/colors";
import Panel from "../../components/Panel";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import ProcessToolbar from "../../components/ProcessToolbar";
import ProcessSearchBar from "../../components/ProcessSearchBar";
import ResultListHeader from "../../components/ResultListHeader";
import ResultRow from "../../components/ResultRow";
import ResultTitle from "../../components/ResultTitle";
import FieldLine from "../../components/FieldLine";
import ResultParagraph from "../../components/ResultParagraph";
import { Play } from 'lucide-react';

const collectResultsData = [
  {
    keyword: "các loại túi ngực hcm",
    url: "https://thammyhanquoc.vn/nang-nguc/tui-don-nguc.html",
    topics: "làm đẹp",
    status: "AI đang xử lý",
    content:
      "Để biết được túi độn ngực nào chất lượng nhất hiện nay? chúng tôi xin mời bạn lắng nghe những chia sẻ từ TS. BS Nguyễn Phan Tú Dung – Giám đốc bệnh viện thẩm mỹ JW Hàn Quốc qua bài viết sau đây. [IMAGE-1] Các dòng túi độn được sử dụng trong nâng ngực Túi độn ngực là sản phẩm được dùng để đặt dưới cơ ngực lớn và dưới tuyến vú nhằm làm tăng kích cỡ vòng một...",
  },
  {
    keyword: "các loại túi ngực hcm",
    url: "https://benhvienjw.vn/tui-don-nguc.html",
    topics: "làm đẹp",
    status: "AI đang xử lý",
    content:
      "Nếu bạn đang nghĩ đến việc phẫu thuật thu nhỏ ngực hoặc nâng ngực, việc lựa chọn loại túi ngực phù hợp với nhu cầu của bạn là rất quan trọng. Vì đó là một quyết định sẽ tồn tại với bạn trong nhiều năm. Túi độn ngực là gì? [IMAGE-1] Túi độn là vật liệu được sử dụng trong thẩm mỹ nâng ngực Túi độn ngực hay còn gọi là túi nâng ngực là sản phẩm được dùng để đặt dưới tuyến vú hoặc cơ ngực nhằm làm tăng kích cỡ vòng một...",
  },
  {
    keyword: "các loại túi ngực hcm",
    url: "https://thammyngomonghung.vn/cac-loai-tui-nang-nguc-hien-nay.html",
    topics: "làm đẹp",
    status: "AI đang xử lý",
    content:
      "Với sự phát triển ngày càng tiến bộ của xã hội, công nghệ nâng ngực cũng như các loại túi nâng ngực hiện nay cũng được tân tiến hơn rất nhiều. Tuy nhiên, để tìm được địa chỉ sử dụng loại túi ngực CHẤT LƯỢNG là điều không phải dễ. Bài viết bên dưới đây sẽ cho bạn biết hiện nay trên thị trường gồm những loại nào, và địa chỉ nâng ngực đẹp ở đâu...",
  },
];

function CollectResultsPage() {
  return (
    <div>
      <ProcessToolbar showSendStep />
      <Breadcrumb current="Kết quả thu thập tin" />
      <Panel style={{ padding: 22 }}>
        <ProcessSearchBar />
        <SectionHeader
          title="Kết quả thu thập tin"
          right={
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                height: 40,
                padding: "0 18px",
                background: COLORS.actionGreen,
                color: "#fff",
                border: "none",
                borderRadius: 4,
                fontSize: 13.5,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <Play size={13} /> Tự động lọc tất cả
            </button>
          }
        />
        <div style={{ border: "1px solid " + COLORS.rowBorder, borderRadius: 6, overflow: "hidden" }}>
          <ResultListHeader />
          {collectResultsData.map((r, i) => (
            <ResultRow key={i} index={i + 1} isLast={i === collectResultsData.length - 1}>
              <ResultTitle>Từ khóa: {r.keyword}</ResultTitle>
              <FieldLine label="URL" value={r.url} isLink />
              <FieldLine label="Danh sách chủ đề" value={r.topics} />
              <FieldLine label="Trạng thái" value={r.status} badge />
              <ResultParagraph>{r.content}</ResultParagraph>
            </ResultRow>
          ))}
        </div>
      </Panel>
    </div>
  );
}

export default CollectResultsPage;