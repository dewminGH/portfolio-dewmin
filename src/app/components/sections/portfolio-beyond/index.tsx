import Styles from "./styles.module.css";
import DF from "../../../assets/beyond/df.jpg";
import NARAKA from "../../../assets/beyond/naraka.jpg";
import PUBG from "../../../assets/beyond/pubg.jpg";
import { Title } from "../../atoms";
import { Background, Section } from "../../layouts";
import { Carousel, MediaItem, MediaType } from "../../molecules";

const PortfolioBeyond = () => {
  const mediaItems: MediaItem[] = [
    {
      type: MediaType.VIDEO,
      src: process.env.NEXT_PUBLIC_CLIP_2 ?? "",
    },
    { type: MediaType.IMAGE, src: NARAKA.src },

    { type: MediaType.IMAGE, src: DF.src },
    {
      type: MediaType.VIDEO,
      src: process.env.NEXT_PUBLIC_CLIP_1 ?? "",
    },
    { type: MediaType.IMAGE, src: PUBG.src },
  ];
  return (
    <Section background={Background.FAV_GRAY}>
      <div className={Styles["site-portfolio"]} id="beyond">
        <Title size="xxl" variant="h2" classAppend={Styles["title-static"]}>
          Gaming Clips Showcase
        </Title>
        <Carousel mediaItems={mediaItems} />
      </div>
    </Section>
  );
};

export default PortfolioBeyond;
