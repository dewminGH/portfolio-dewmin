import { Dispatch, SetStateAction, useEffect } from "react";
export const phrases = [
  "Ideas to Life",
  "Vision to Action",
  "Creativity to Code",
];

const useGenerateText = (setter: Dispatch<SetStateAction<string>>) => {
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setter(phrases[currentIndex]);
      currentIndex = (currentIndex + 1) % phrases.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [setter]);
};

export default useGenerateText;
