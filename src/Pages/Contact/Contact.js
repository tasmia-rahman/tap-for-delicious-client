import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import banner from '../../Assets/contact-banner/contact-banner.jpg'
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59tyy72",
        "template_anezc8g",
        form.current,
        "kNwztQYr4W2J63n7m"
      )
      .then(
        (result) => {
          console.log(result.text);
            toast.success('Email Send Successfully!')
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className=" ">
        <div className="bg-fixed "  style={{backgroundImage: `url(${banner})`}}>
            {/* <img src={banner} alt="contact-banner" /> */}
            <h1 className="text-5xl text-white  font-semibold block text-center py-40 ">Contact With Tap For Delicious.</h1>
        </div>
      
      <div className=" text-neutral-content shadow-xl">
        <div className="card-body">
          <form
            data-aos="fade-up"
            className="flex align-middle justify-center flex-col sm:mx-24 my-16"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="text-black">Name:</label>
            <input
              type="text"
              placeholder="Type Your Name"
              className="input input-bordered input-warning w-full text-black"
              name="user_name"
              required
            />
            <br />
            <label className="text-black">Email:</label>
            <input
              type="email"
              placeholder="Type Your Email"
              className="input input-bordered input-warning w-full text-black"
              name="user_email"
              required
            />
            <br />
            <label className="text-black">Message:</label>
            <textarea
              className="textarea textarea-warning text-black"
              name="message"
              placeholder="Type Your Message"
              required
            />
            <input
              className="btn btn-outline btn-warning mt-5"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
