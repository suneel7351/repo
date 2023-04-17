import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Nav from "./Nav";

function Contact() {
  // const dispatch = useDispatch();
  // const { message, error } = useSelector((state) => state.login);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      return toast.info("Name and Email are mandatory.");
    }
    setLoading(true);
    const { data } = await axios.post(
      "https://portfoliobackend-m3sn.onrender.com/api/v1/contact",
      {
        name,
        email,
        message: msg,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data.success === true) {
      toast.success(data.message);
      setLoading(false);
    } else {
      toast.info("Someting went wrong.");
      setLoading(false);
    }

    setName(name);
    setEmail(email);
    setMsg("");
  };

  return (
    <>
      <Nav text="Contact me" />
      <div className="contact z-50 bg-[#011431] py-16 h-screen border-t border-dotted border-slate-700">
        <div className="md:w-[60%] rounded-lg w-[95%] mx-auto px-6 md:px-8 bg-[#011431] py-8 shadow-2xl border border-slate-800 contact-card">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full md:w-[80%] mx-auto"
          >
            <h1 className="text-3xl text-slate-200 mb-4">Get in Touch</h1>
            <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
              <input
                type="text"
                className="bg-[#001634] w-full flex-1 border border-slate-800 rounded-lg outline:ring-0 outline-none px-4 py-1 text-slate-200"
                placeholder="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                className="bg-[#001634] w-full flex-1 border border-slate-800 rounded-lg outline:ring-0 outline-none  px-4 py-1 text-slate-200"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              className="bg-[#001634] outline:ring-0 outline-none border border-slate-800 rounded-lg shadow-xl py-2 px-4 text-slate-200"
              placeholder="Message"
              rows={5}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <button className="btn w-full md:w-48 flex items-center justify-center" type="submit">
              {loading === true ? (
                <span class="ml-2 inline-flex rounded-md h-[23px]">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016.477 13H4.11c.29 1.172.846 2.24 1.623 3.085l1.292-.794zm9.166-.794c.777-.845 1.333-1.913 1.623-3.085H17.52a7.962 7.962 0 01-1.292 3.085l-1.292.794z"
                    ></path>
                  </svg>
                
                </span>
              ) : (
                <> Send message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
