import React, { useState, useEffect } from "react";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const ContactInfo = ({ display, onClose }) => {

  return (
    <div
      className={`${
        display ? "" : "hidden"
      } min-w-screen min-h-screen bg-slate-500 bg-opacity-[0.1] shadow-md fixed top-0 left-0 right-0 z-[101] flex justify-center items-center transition-transform duration-700`}
    >
      <div className="border-2 border-opacity-[0.4] border-primaryColor bg-primaryBg rounded-xl h-[250px] w-[380px] md:h-[250px] md:w-[500px] px-4 pt-2 text-primaryColor">
        <div className="flex justify-end text-lg">
          <button onClick={onClose}>
            <XMarkIcon className="transition-all duration-5 h-6 w-6 text-secondaryColor hover:text-primaryColor" />
          </button>
        </div>
        <h3 className="text-center text-2xl font-semibold mb-4">Contact Me</h3>
        <div className="flex mb-4 ml-2">
          <DevicePhoneMobileIcon className="h-6 w-6" />
          <p className="ml-2">+33 6 17 22 39 59</p>
        </div>
        <div className="flex mb-4 ml-2">
          <EnvelopeIcon className="h-6 w-6" />
          <p className="ml-2">camellia.bui95@gmail.com</p>
        </div>
        <div className="flex">
          <Link href="https://github.com/CamelliaBui95" className="mr-2">
            <div className="bg-iconGithub h-[50px] w-[50px]"></div>
          </Link>
          <Link href="https://www.linkedin.com/in/nghi-bui-9b9585173">
            <div className="bg-iconLinkedIn h-[50px] w-[50px]"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
