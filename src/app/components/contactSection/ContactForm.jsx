"use client";
import React, {useState} from 'react';
import "./contactStyle.css";

const ContactForm = ({display}) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
      };
      
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata
    };

    const response = await fetch(endpoint, options);
      
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <form className={`form-section ${display}`} onSubmit={handleSubmit}>
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
        {
          emailSubmitted &&
          <p className='mb-0 mt-2 text-primaryColor'>Your message has been sent successfully</p>
        }
      </form>
    </div>
  );
}

export default ContactForm