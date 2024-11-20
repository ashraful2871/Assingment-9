import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img
            className="w-12"
            src="https://i.ibb.co.com/4VWpSyw/Free.png"
            alt=""
          />
          <p className="font-semibold">
            Collect Coupon
            <br />
            Providing reliable tech since 2023
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              className="text-2xl"
              href="https://x.com/ashraful72871"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="text-2xl"
              href="https://www.facebook.com/ashraful2871"
              target="_blank"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              className="text-2xl"
              href="https://www.instagram.com/ashrafulislam2871/"
              target="_blank"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-200 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved Collect
            Coupon Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
