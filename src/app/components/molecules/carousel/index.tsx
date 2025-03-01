"use client";

import React, { MouseEventHandler, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { MediaItem, MediaType } from "./type";

const Carousel: React.FC<{ mediaItems: MediaItem[] }> = ({ mediaItems }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with a middle image

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const iframeOnClick = (e: MouseEventHandler<HTMLVideoElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const video = e.target as HTMLVideoElement;
    if (video.paused) {
      video.play(); // Play the video if it is paused
    } else {
      video.pause(); // Pause the video if it is already playing
    }
  };

  return (
    <div className={styles["carousel"]}>
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className={`${styles["carousel-button"]} ${styles["carousel-button-left"]}`}
      >
        ◀
      </button>

      {/* Carousel Container */}
      <div className={styles["carousel-container"]}>
        {mediaItems.map((item, index) => {
          let positionClass = styles["carousel-image-hidden"];

          if (index === activeIndex) {
            positionClass = styles["carousel-image-active"];
          } else if (
            index ===
            (activeIndex - 1 + mediaItems.length) % mediaItems.length
          ) {
            positionClass = styles["carousel-image-left"];
          } else if (index === (activeIndex + 1) % mediaItems.length) {
            positionClass = styles["carousel-image-right"];
          }

          return (
            <React.Fragment key={index}>
              {item.type === MediaType.IMAGE ? (
                <motion.img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className={`${styles["carousel-image"]} ${positionClass}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.video
                  muted
                  src={item.src}
                  className={`${styles["carousel-image"]} ${styles["carousel-iframe"]} ${positionClass}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
                  autoPlay
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  onClick={iframeOnClick}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className={`${styles["carousel-button"]} ${styles["carousel-button-right"]}`}
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
