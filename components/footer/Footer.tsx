import React from "react";
import Wreaper from "../Wreaper";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className=" bg-[#212529] h-auot">
        <Wreaper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-[80px] font-lora">
            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-lg text-white font-bold leading-6 text-left">
                Contact the Publisher
              </h2>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                info@publisher.com
              </p>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                +1 (123) 456-7890
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-lg text-white font-bold leading-6 text-left">
                Explorate
              </h2>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                About
              </p>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                Partners
              </p>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                Job Opportunities
              </p>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                Advertise
              </p>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                Membership
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-lg text-white font-bold leading-6 text-left">
                Headquarter
              </h2>
              <p className="text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60 pr-0 md:pr-52">
                191 Middleville Road, NY 1001, Sydney Australia
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-lg text-white font-bold leading-6 text-left">
                Connections
              </h2>
              <div className="flex space-x-4 text-xs text-[#E5E5E5] font-normal leading-[15.36px] opacity-60">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-white" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-white" />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white" />
                </Link>
              </div>
            </div>
                  </div>
        </Wreaper>
                  <div className="bg-[#343A40] h-80px">
                  <Wreaper>
                      <div className="py-4 font-lora flex justify-between text-sm font-extrabold leading-[17.92px] text-left -from-font decoration-none text-[#E5E5E5]">
                          <h2>
                          2024 | BlogsTERA Publisher Studio

                          </h2>
                          <h2>
                          Subscribe Now
                          </h2>
                     </div>
                 </Wreaper>
                  </div>
      </footer>
    </>
  );
};

export default Footer;
