import { AiOutlineInstagram, AiFillRedditCircle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-grey">
      <ul className="text-light-grey pl-3">
        <li>Information</li>
        <li>About Us</li>
        <li>Help</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Socials</li>
        <ul id='footer-socials' className="flex gap-[10px]">
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

        <li className="text-sm">
          NEW TYPE OCEAN LLC/INC 2023 All Rights Reserved
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
