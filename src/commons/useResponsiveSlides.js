import { useState, useEffect } from "react";

const useResponsiveSlides = ({breakpoints = { small: 1, medium: 2, large: 3 }}) => {
  const [slidesToShow, setSlidesToShow] = useState(breakpoints.large); // Default value

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentRect.width < 992) {
            setSlidesToShow(breakpoints.small);
        } else if (entry.contentRect.width <= 1200) {
            setSlidesToShow(breakpoints.medium);
        } else {
            setSlidesToShow(breakpoints.large);
        }
        }
      });
  
      observer.observe(document.documentElement);
      return () => {
        observer.disconnect();
      };
  }, []);

  return slidesToShow;
};

export default useResponsiveSlides;