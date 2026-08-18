import { XIcon, Search, Eye, Send } from 'lucide-react';
import ToolbarButton from "./ToolbarButton";

function ProcessToolbar({ showSendStep }) {
  return (
    <div style={{ display: "flex", marginBottom: 4 }}>
      <ToolbarButton icon={XIcon} label="Xóa" />
      <ToolbarButton icon={Search} label="Tìm kiếm" />
      <ToolbarButton icon={Eye} label="Xem chi tiết" />
      {showSendStep && <ToolbarButton icon={Send} label="Chuyển đến bước đánh giá" />}
    </div>
  );
}

export default ProcessToolbar;