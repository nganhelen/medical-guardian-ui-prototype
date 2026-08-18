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

const filterResultsData = [
  {
    keyword: "Căng da mặt hcm",
    url: "https://thammyvientiensitri.vn/top-5-dia-chi-cang-da-mat-uy-tin-nhat-tphcm-lua-chon-bac-si-chuyen-mon-cao-cho-hanh-trinh-cang-da-an-toan/",
    topics: "Căng da mặt",
    status: "AI đang xử lý",
    content:
      'TOP 5 ĐỊA CHỈ CĂNG DA MẶT UY TÍN NHẤT TP.HCM: Lựa Chọn Bác Sĩ Chuyên Môn Cao Cho Hành Trình Căng Da Khám phá top 5 địa chỉ căng da mặt uy tín nhất TP.HCM với đội ngũ bác sĩ thẩm mỹ giàu kinh nghiệm, chuyên môn cao và trang thiết bị hiện đại hàng đầu. Những cơ sở này được khách hàng đánh giá cao nhờ quy trình chuẩn y khoa, kỹ thuật căng da tiên tiến, cam kết an toàn – tự nhiên – hiệu quả lâu dài. Nếu bạn đang tìm kiếm nơi nâng tầm nhan sắc, cải thiện lão hóa da và lấy lại nét trẻ trung rạng rỡ, đây chính là những gợi ý chất lượng giúp hành trình tái sinh diện mạo của bạn an tâm và trọn vẹn hơn. 04-11-2025 03:24:04 PM - 463 TOP 5 ĐỊA CHỈ CĂNG DA MẶT UY TÍN NHẤT TP.HCM: Lựa Chọn Bác Sĩ Chuyên Môn Cao Cho Hành Trình Căng Da An Toàn Quyết định căng da mặt là một khoản đầu tư lớn vào nhan sắc và sự tự tin. Tuy nhiên, việc tìm kiếm một địa chỉ căng da uy tín tại TP.HCM trong "ma trận" thẩm mỹ hiện nay lại là một thách thức không hề nhỏ. Sự an toàn và hiệu quả thẩm mỹ phụ thuộc hoàn toàn vào tay nghề Bác sĩ và cơ sở vật chất. [IMAGE-1] 1. Tiêu Chí Đánh Giá Một Địa Chỉ Căng Da Uy Tín Trước khi đến với danh sách Top 5, bạn cần nắm rõ những tiêu chí quan trọng để đánh giá một cơ sở căng da chất lượng: - Giấy phép Hoạt động: Cơ sở phải được Sở Y tế cấp phép Phẫu thuật Thẩm mỹ (đối với phẫu thuật căng da). - Bác sĩ Chuyên khoa: Bác sĩ thực hiện phải có Chứng chỉ hành nghề Phẫu thuật Tạo hình Thẩm mỹ, có kinh nghiệm chuyên sâu về căng da mặt SMAS. - Công nghệ và Quy trình: Áp dụng kỹ thuật nâng cơ hiện đại (như SMAS), quy trình vô khuẩn và gây mê/gây tê đạt chuẩn Bệnh viện. - Phản hồi Khách hàng: Đánh giá thực tế và minh bạch về kết quả trẻ hóa và quá trình hậu phẫu. 2. TOP 5 ĐỊA CHỈ CĂNG DA MẶT UY TÍN NHẤT TẠI TP.HCM Dưới đây là 5 cơ sở được đánh giá cao về chuyên môn và chất lượng dịch vụ căng da mặt tại TP.HCM: 1. Phòng khám Chuyên khoa Phẫu thuật Thẩm mỹ DR.TRÍ Nổi bật với sự dẫn dắt của Tiến sĩ Bác sĩ chuyên môn cao, DR.TRÍ là lựa chọn hàng đầu cho các ca phẫu thuật căng da phức tạp. - Bác sĩ Chuyên môn: Tiến sĩ Bác sĩ Đỗ Thành Trí – Chuyên gia Phẫu thuật Thẩm mỹ với hơn 20 năm kinh nghiệm. Bác sĩ Trí trực tiếp thực hiện các kỹ thuật Căng da mặt SMAS chuyên sâu, tập trung vào việc nâng cơ gốc, mang lại hiệu quả trẻ hóa bền vững và tự nhiên. - Thế mạnh: Quy trình căng da chuẩn y khoa, áp dụng kỹ thuật SMAS chính xác, cam kết giấu sẹo tối đa. Phác đồ căng da cá nhân hóa theo từng mức độ lão hóa của cơ. - Phương pháp: Căng da mặt SMAS, Căng da mặt mini. 2. Bệnh viện Thẩm mỹ XYZ (Ví dụ về một bệnh viện lớn) - Bác sĩ Chuyên môn: Đội ngũ Bác sĩ chuyên khoa Phẫu thuật Tạo hình, được đào tạo bài bản trong và ngoài nước. - Thế mạnh: Quy mô lớn, cơ sở vật chất hiện đại, có phòng mổ vô khuẩn và máy móc hỗ trợ chẩn đoán tiên tiến. Phù hợp cho các ca phẫu thuật cần sự hỗ trợ của đa chuyên khoa. 3. Viện Thẩm mỹ ABC (Ví dụ về một viện thẩm mỹ có tiếng) - Bác sĩ Chuyên môn: Bác sĩ P.V.A, có nhiều năm kinh nghiệm trong lĩnh vực trẻ hóa da và nâng cơ. - Thế mạnh: Cân bằng giữa các dịch vụ căng da phẫu thuật và không phẫu thuật (căng chỉ, Thermage, HIFU). Cung cấp đa dạng giải pháp cho các mức độ lão hóa khác nhau. 4. Bệnh viện Da Liễu Thẩm Mỹ (Ví dụ về bệnh viện công/tư chuyên về Da Liễu) - Bác sĩ Chuyên môn: Các Bác sĩ Da Liễu và Phẫu thuật viên Thẩm mỹ chuyên về tái tạo da. - Thế mạnh: Là nơi an toàn để thực hiện các thủ thuật căng da ít xâm lấn và kết hợp điều trị các vấn đề về da liễu khác như sắc tố, mụn. 5. Phòng khám Thẩm mỹ DEF (Ví dụ về một phòng khám uy tín khác)...',
  },
];

function FilterResultsPage() {
  return (
    <div>
      <ProcessToolbar showSendStep />
      <Breadcrumb current="Kết quả lọc" />
      <Panel style={{ padding: 22 }}>
        <ProcessSearchBar />
        <SectionHeader
          title="Kết quả lọc"
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
              <Play size={13} /> Tự động đánh giá tất cả
            </button>
          }
        />
        <div style={{ border: "1px solid " + COLORS.rowBorder, borderRadius: 6, overflow: "hidden" }}>
          <ResultListHeader />
          {filterResultsData.map((r, i) => (
            <ResultRow key={i} index={i + 1} isLast={i === filterResultsData.length - 1}>
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

export default FilterResultsPage;