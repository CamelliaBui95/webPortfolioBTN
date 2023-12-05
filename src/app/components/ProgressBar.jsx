import React from 'react'

const ProgressBar = ({label, percentage}) => {
  return (
    <div className="my-[15px] p-[10px]">
      <h3 className="m-[5px]">{label}</h3>
      <span className="bar block h-[15px] bg-[#353b48] rounded-full transition-all duration-300 shadow-md">
        <span className={`load-${percentage} h-[15px] w-[${percentage}%] rounded-full float-left bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#FF3CAC] shadow-inner animate-[load-${percentage}_3s]`}></span>
      </span>
    </div>
  );
}

export default ProgressBar