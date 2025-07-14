import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-12 text-text-main">
        <span className="text-primary">#</span>contact-me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="border border-slate-700 p-6 bg-background-light rounded-lg">
          <h3 className="text-text-main font-semibold mb-4 text-2xl">
            Get in touch
          </h3>
          <p className="text-secondary mb-8">
            I'm currently seeking internship opportunities and am open to
            freelance projects. Feel free to reach out via email or connect with
            me on social media.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MdEmail className="w-6 h-6 text-primary" />
              <a
                href={`mailto:${data.email}`}
                className="text-secondary hover:text-text-main"
              >
                {data.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="w-6 h-6 text-primary" />
              <span className="text-secondary">{data.phone}</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-700 p-6 bg-background-light rounded-lg">
          <h3 className="text-text-main font-semibold mb-4 text-2xl">
            Or leave a message
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-secondary block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-background border border-slate-700 p-2 focus:outline-none focus:border-primary transition-colors rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-secondary block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-background border border-slate-700 p-2 focus:outline-none focus:border-primary transition-colors rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-secondary block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-background border border-slate-700 p-2 resize-none focus:outline-none focus:border-primary transition-colors rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 border border-primary text-text-main font-medium hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
