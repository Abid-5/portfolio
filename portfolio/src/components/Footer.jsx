import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-text-main font-bold text-lg">
            Designed & Built by {data.name}
          </span>
          <div className="flex gap-4">
            {Object.values(data.contact.socials).map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <social.Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
