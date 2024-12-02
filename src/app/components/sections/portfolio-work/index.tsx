import { Background, Section } from "../../layouts";
import Timeline from "./Timeline";

const PortFolioWork: React.FC = () => {
  return (
    <Section background={Background.PRIMARY_GRADIENT}>
      <Timeline />
    </Section>
  );
};

export default PortFolioWork;
