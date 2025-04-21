import "./theme/theme.css";
import "./styles.css";
import {
  LazyTechStack,
  // PortfolioAbout,
  PortfolioBeyond,
  PortfolioIntro,
  PortfolioNavWithCanvas,
  PortfolioSite,
  PortfolioWork,
} from "./components";

const PortfolioLandingPage: React.FC = () => {
  return (
    <div>
      <PortfolioNavWithCanvas />
      <PortfolioIntro />
      <LazyTechStack />
      <PortfolioWork />
      <PortfolioSite />
      {/* <PortfolioAbout /> */}
      <PortfolioBeyond />
    </div>
  );
};

export default PortfolioLandingPage;
