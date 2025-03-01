import "./theme/theme.css";
import "./styles.css";
import {
  // PortfolioAbout,
  PortfolioBeyond,
  PortfolioIntro,
  PortfolioNavWithCanvas,
  PortfolioSite,
  PortfolioTeachStack,
  PortfolioWork,
} from "./components";

const PortfolioLandingPage: React.FC = () => {
  return (
    <div>
      <PortfolioNavWithCanvas />
      <PortfolioIntro />
      <PortfolioTeachStack />
      <PortfolioWork />
      <PortfolioSite />
      {/* <PortfolioAbout /> */}
      <PortfolioBeyond />
    </div>
  );
};

export default PortfolioLandingPage;
