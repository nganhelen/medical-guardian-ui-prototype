import { COLORS } from "../constants/colors";

function ResultTitle({ children }) {
  return (
    <div style={{ fontSize: 15.5, fontWeight: 700, color: COLORS.breadcrumbDark, marginBottom: 8 }}>{children}</div>
  );
}

export default ResultTitle;