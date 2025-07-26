import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white px-6 py-10 mt-10 rounded-t-2xl shadow-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* title  */}
          <div>
            <div className="text-2xl flex items-center gap-2 font-bold mb-2">
              <img className="w-15" src={logo} alt="" />
              <h2>Food Sharing</h2>
            </div>
            <p className="text-sm text-gray-400">
              Empowering users with seamless access to legal services.
            </p>
          </div>

          {/* navigation link  */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link className="hover:underline">Terms of service</Link>
              </li>
              <li>
                <Link className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link className="hover:underline">Donate Food</Link>
              </li>
              <li>
                <Link className="hover:underline">Request Food</Link>
              </li>
            </ul>
          </div>
          {/* social media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
