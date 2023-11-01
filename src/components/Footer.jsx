import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-5 py-10 text-sm text-gray-500">
      <a
        className="font-semibold hover:text-gray-700 hover:underline"
        href="https://rakib-blog.vercel.app"
        target="_blank"
      >
        Currently Working
      </a>
      <p className="hover:text-gray-700 hover:underline">
        rakibuzzaman.contact@gmail.com
      </p>
    </div>
  );
};

export default Footer;
