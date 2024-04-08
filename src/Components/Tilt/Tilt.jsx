import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt = ({ children }) => {
  const rootNode = useRef(null);

  useEffect(() => {
    if (rootNode.current) {
      VanillaTilt.init(rootNode.current, {
        max: 25,
        speed: 400,
        glare: false,
        "max-glare": 0,
      });
    }
  }, []);

  return (
    <div ref={rootNode} className="tilt-root">
      <div className="tilt-child">
        <div className="totally-centered">{children}</div>
      </div>
    </div>
  );
};

export default Tilt;
