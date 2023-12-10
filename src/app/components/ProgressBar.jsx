import React, { useEffect, useState, useRef } from "react";

const ProgressBar = ({ label, percentage }) => {
  const ref = useRef(null);
  const [hasIntersected, setIntersect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersect(true);
        else setIntersect(false);
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
      <h3 className="m-[5px] text-base text-primaryColor">{label}</h3>

      <span
        className="bar block h-[12px] bg-bgDeco rounded-full shadow-lg my-auto"
        ref={ref}
      >
        <span
          className={`h-[12px] w-[0%] rounded-full float-left bg-gradient-to-r from-grad-from via-grad-via to-grad-to my-auto transition-all duration-[2.8s] ease-out`}
          style={{ width: `${hasIntersected ? percentage : "0"}%` }}
        ></span>
      </span>
    </div>
  );
};

export default ProgressBar;
