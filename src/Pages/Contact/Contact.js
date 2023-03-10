import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import banner from '../../Assets/contact-banner/contact-banner.jpg'
import { toast } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7xbhoe",
        "template_901deqc",
        form.current,
        "KiMGZKUgVfCTntDP6"
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
    <div className="">
      <div className="bg-fixed " style={{ backgroundImage: `url(${banner})` }}>
        {/* <img src={banner} alt="contact-banner" /> */}
        <h1 className="text-5xl text-white  font-semibold block text-center py-40 bg-stone-800/30">Contact With Tap For Delicious.</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="w-1/2 my-20">
          <Player
            src='https://assets6.lottiefiles.com/packages/lf20_bt7iqzns.json'
            className="player bg-black rounded-lg"
            loop
            autoplay
            speed={1}
          />
        </div>
        <div className="w-1/2">
          <div className="card flex justify-center">
            {/* <form
              data-aos="fade-up"
              className="flex justify-center max-w-[900px] mx-auto flex-col sm:mx-auto my-16 "
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
                className="btn btn-outline btn-warning mt-5 hover:text-white"
                type="submit"
                value="Send"
              />
            </form> */}
            <form action="#" data-aos="fade-up"
              ref={form}
              onSubmit={sendEmail} className="space-y-8 mb-8">

              <div className="md:px-8">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 "
                  type="text"
                  placeholder="Type Your Name"
                  name="user_name"
                  required />
              </div>
              <div className="md:px-8">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <input className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  type="email"
                  placeholder="Type Your Email"
                  name="user_email"
                  required />
              </div>
              <div className="sm:col-span-2 md:px-8">
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 " placeholder="Leave a comment..."></textarea>
              </div>
              <button className="btn max-w-sm mx-auto flex justify-center  border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300"
                type="submit"
                value="Send">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
