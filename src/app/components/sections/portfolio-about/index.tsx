import Styles from "./styles.module.css";
import Image from "next/image";
import x from "../../../assets/1.png";
import { Background, Section } from "../../layouts";
import { Text, Title } from "../../atoms";

const PortfolioAbout: React.FC = () => {
  return (
    <Section background={Background.GRAY}>
      <div className={Styles["about-container"]} id="about">
        <Title size="xxl" variant="h2" classAppend={Styles["title-static"]}>
          About me
        </Title>
        <div className={Styles["description-container"]}>
          <Image
            className={Styles["image-l"]}
            width={400}
            height={400}
            src={x.src}
            alt="image"
          />
          <Text size="small" classAppend={Styles["text"]}>
            I began my academic journey at SLIIT University in January 2020,
            where I studied Software Engineering and graduated in January 2022
            with a Higher National Diploma. After completing my diploma, I
            gained hands-on experience by starting my career as a Front-End Web
            Developer. In November 2022, I pursued further education at Cardiff
            Metropolitan University to obtain a BSc (Hons) in Software
            Engineering. I completed my studies in December 2023 and officially
            graduated in January 2024. My time at Cardiff Metropolitan
            University allowed me to refine my skills and gain deeper insights
            into modern development practices. Since starting my career, I have
            been passionate about building engaging, responsive, and efficient
            web applications, continuously striving to enhance my skills as a
            front-end developer
          </Text>
          <Image
            className={Styles["image-r"]}
            width={400}
            height={400}
            src={x.src}
            alt="image"
          />
        </div>
      </div>
    </Section>
  );
};

export default PortfolioAbout;
