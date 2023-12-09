import React, { useEffect, useState, useRef } from "react";

const ProgressBar = ({ label, percentage }) => {
  const ref = useRef(null);
  const [hasIntersected, setIntersect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersect(true);
        else setIntersect(false)
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-[15px] p-[10px]">
      <h3 className="m-[5px] text-base">{label}</h3>
      <span className="bar block h-[12.5px] bg-[#353b48] rounded-full shadow-md" ref={ref}>
        <span
          className={`h-[12px] w-[0%] rounded-full float-left bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#FF3CAC] transition-all duration-[2.8s] ease-out`}
          style={{ width: `${hasIntersected ? percentage : "0"}%` }}
        ></span>
      </span>
    </div>
  );
};

export default ProgressBar;
