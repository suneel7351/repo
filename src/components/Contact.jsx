
import React, {  useRef, useState } from "react";
import { toast } from "react-toastify";
import Nav from "./Nav";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser'
function Contact() {
  const [loading,setLoading]=useState(false)
  

  const form = useRef();

  const sendEmail = (e) => {
    if(loading)return
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm(process.env?.REACT_APP_SERVICE_ID, process.env?.REACT_APP_TEMPLATE_ID, form.current, process.env?.REACT_APP_PUBLIC_ID)
      .then((result) => {
        toast.success("Your email has been successfully sent  🚀. Thank you for reaching out.");
        setLoading(false)

      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      {" "}
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Nav text="Contact me" />
      <div className="contact z-50 bg-gray-50 py-16 h-screen ">
        <div className="md:w-[60%] rounded-lg w-[95%] mx-auto px-6 md:px-8 bg-white py-8 shadow border border-gray-100 contact-card">
          <form
            ref={form} onSubmit={sendEmail}
            className="flex flex-col gap-4 w-full md:w-[80%] mx-auto"
          >
            <h1 className="text-3xl text-black mb-4">Get in Touch</h1>
            <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
              <input
                type="text" name="from_name"
                className="shadow w-full flex-1 border border-gray-100 rounded-lg outline:ring-0 outline-none px-4 py-1 text-black"
                placeholder="Your name"
                required
              />
              <input
                type="email" name="from_email"
                className="shadow w-full flex-1 border border-gray-100 rounded-lg outline:ring-0 outline-none  px-4 py-1 text-black"
                placeholder="Your email"
                required
              />
            </div>
            <textarea
              className=" outline:ring-0 outline-none border border-gray-100 rounded-lg shadow py-2 px-4 text-black"
              placeholder="Message"
              rows={5}
              name="message"
              required
            ></textarea>



            <button
              className="btn w-full md:w-48 flex items-center justify-center"
              type="submit"
            >
             {
              loading?"Sending...":"Send"
             }
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
