import { AiOutlineInstagram, AiFillRedditCircle, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-grey">
      <ul className="text-light-grey pl-3 pt-4">
        <li>Information</li>
        <li>About Us</li>
        <li>Help</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <div className="py-2">
          Socials
          <ul id="footer-socials" className="flex gap-[10px]">
            <li>
              <AiOutlineInstagram size={20} />
            </li>
            <li>
              <BsFacebook size={20} />
            </li>
            <li>
              <BsTwitter size={20} />
            </li>
            <li>
              <AiFillRedditCircle size={20} />
            </li>
          </ul>
        </div>
        <div id="light-dark-mode" className='flex gap-[8px]'>Mode <FaMoon /></div>
        <li className="text-sm flex gap-[5px]">
          <AiOutlineCopyrightCircle /> NEW TYPE OCEAN LLC/INC 2023 All Rights Reserved
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
