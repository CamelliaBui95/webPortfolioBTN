import React from 'react';
import "./contactStyle.css";

const ContactForm = ({display}) => {
  return (
    <div className="contact-section" id="contact">
      <form action="" className={`form-section ${display}`}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-primaryColor block mb-2 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="placeholder-secondaryColor text-primaryColor text-sm rounded-lg block w-full p-2.5"
            placeholder="abc@mail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-primaryColor block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className=" placeholder-secondaryColor text-primaryColor text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-primaryColor block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="placeholder-secondaryColor text-primaryColor text-sm rounded-lg block w-full p-2.5"
            placeholder="..."
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm