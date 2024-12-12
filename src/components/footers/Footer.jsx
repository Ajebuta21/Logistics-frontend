import React from "react";
import Logo from "../../assets/logos/gml3.png";
import { Link } from "react-router-dom";

const list = [
  { name: "Home", link: "/" },
  { name: "Ship", link: "/create-shipping" },
  { name: "Track", link: "/track-package" },
  { name: "About us", link: "/about-us" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "T & C", link: "/terms-and-condition" },
];

const Footer = () => {
  return (
    <footer className="w-full p-7 bg-black flex flex-col font-serif">
      <div className="flex w-full gap-10 pb-2 border-b border-primary/20 max-lg:flex-col">
        <div className="w-full flex flex-col gap-2">
          <div className="flex w-full items-center gap-5">
            <img src={Logo} alt="" className="w-14" />
            <div className="flex flex-col">
              <h3 className="text-lg text-primary font-semibold">
                GlobeMerge Logistics
              </h3>
              <span className="text-xs text-white font-extralight italic">
                Merging the World, One Shipment at a Time.
              </span>
            </div>
          </div>
          <p className="text-white text-xs">
            Welcome to GlobeMerge Logistics, your trusted partner in global
            shipping and logistics solutions. At GlobeMerge Logistics, we are
            dedicated to providing seamless, reliable, and efficient shipping
            services tailored to meet the unique needs of our diverse clientele.
            Our mission is to ensure your products reach their destinations
            safely, promptly, and cost-effectively, no matter the distance or
            the mode of transport required.
          </p>
        </div>
        <div className="w-full flex gap-2 lg:gap-5">
          <div className="w-full flex flex-col gap-1">
            <h3 className=" text-primary font-semibold">Useful Links</h3>
            {list.map((item) => {
              return (
                <Link
                  to={item.link}
                  key={item.link}
                  className="flex gap-2 items-center transition-all ease-in-out hover:translate-x-2"
                >
                  <i className="fa-solid fa-caret-right text-primary"></i>
                  <span className="text-xs text-white">{item.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="w-full flex flex-col gap-1">
            <h3 className=" text-primary font-semibold">Contact Information</h3>
            <div className="flex gap-2 items-center transition-all ease-in-out hover:translate-x-2">
              <i className="fa-solid fa-envelope text-primary"></i>
              <span className="text-xs text-white">
                support@globemergelogistics.com
              </span>
            </div>
            <div className="flex gap-2 items-center transition-all ease-in-out hover:translate-x-2">
              <i className="fa-solid fa-phone text-primary"></i>
              <span className="text-xs text-white">+1 (661) 833-2283</span>
            </div>
          </div>
        </div>
      </div>
      <span className="w-full text-center text-primary text-xss my-2">
        © 2016 GlobeMerge Logistics. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
