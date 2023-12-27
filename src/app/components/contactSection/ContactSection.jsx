import React from "react";
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative text-primaryColor">
        <div>
          <h5 className="text-xl font-bold my-2">Let's Connect</h5>
          <p className="text-secondaryColor mb-4 max-w-md">
            {""}
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href={"/"}>
              <Image
                src={GithubIcon}
                alt="Github Icon"
              />
            </Link>
            <Link href={"/"}>
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
              </div>
              
              <div>
                  <form action="">
                      
                  </form>
              </div>
      </div>
    </section>
  );
};

export default ContactSection;
