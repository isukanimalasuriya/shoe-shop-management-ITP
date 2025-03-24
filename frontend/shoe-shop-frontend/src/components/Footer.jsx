import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <span className="mb-5 w-32 text-2xl font-bold tracking-wide text-gray-800 uppercase">
            An Shoe Paradaise
          </span>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
            quisquam distinctio officiis maiores, dolores nam impedit dicta
            harum animi inventore dignissimos eius autem corporis iste repellat
            adipisci doloremque tempore sapiente.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Shop</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">HOME</Link>
            <Link to="/Collection">Collection</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Contact">CONTACT</Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94 718362090</li>
            <li>anshoe@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
          <hr w-full border-gray-300 />
          <p className="py-5 text-sm text-center">
            Copyright 2024@ An Shoe.com -All Right{" "}
          </p>
        </div>
    </div>
  );
};

export default Footer;
