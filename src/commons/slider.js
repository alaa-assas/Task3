import { useState, useEffect } from "react";

const Slider = ({breakpoints = { small: 1, medium: 2, large: 3 ,dataLength}}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(breakpoints.large);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentRect.width < 992) {
            setCardsPerSlide(breakpoints.small);
        } else if (entry.contentRect.width <= 1200) {
          setCardsPerSlide(breakpoints.medium);
        } else {
          setCardsPerSlide(breakpoints.large);
        }
        }
      });
  
      observer.observe(document.documentElement);
      return () => {
        observer.disconnect();
      };
  }, []);

  const next = () => {
    if (startIndex + cardsPerSlide >= breakpoints.dataLength) return;
    setStartIndex(startIndex + cardsPerSlide);
  };

  const prev = () => {
    if (startIndex === 0) return;
    setStartIndex(startIndex - cardsPerSlide);
  };

  const getVisibleItems = (data) => {
    return data.slice(startIndex, startIndex + cardsPerSlide);
  };

  return { next, prev, getVisibleItems, cardsPerSlide };
};

export default Slider;