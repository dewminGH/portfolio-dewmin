import "./theme/theme.css";
import "./styles.css";
import {
  Navbar,
  PortfolioIntro,
  PortfolioTeachStack,
  PortFolioWork,
} from "./components";

const PortfolioLandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PortfolioIntro />
      <PortfolioTeachStack />
      <PortFolioWork />
    </div>
  );
};

export default PortfolioLandingPage;
