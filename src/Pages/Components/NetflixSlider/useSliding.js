import { useState, useRef, useEffect } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';
const PADDINGS = 110;

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth - PADDINGS;
      setContainerWidth(containerWidth);
      setTotalInViewport(Math.floor(containerWidth / elementWidth));
    }
  }, [containerRef.current]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + width*.75);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - width*.75);
  };

  const { height, width } = useWindowDimensions();
  const leftOffset = distance + (width * .39);

  const slideProps = {
    style: { transform: `translate3d(${leftOffset}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
