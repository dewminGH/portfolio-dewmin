import "./theme/theme.css";
import "./styles.css";
import { Navbar, PortfolioLandingIntro } from "./components";

const PortfolioLandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PortfolioLandingIntro />
      <div style={{ height: "100svh", width: "100%", background: "red" }}>
        Section 2 On the WAy
      </div>
    </div>
  );
};

export default PortfolioLandingPage;
