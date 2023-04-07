import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Image from "next/image";

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
              <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/XiaohongshuLOGO.png?20181027065954" height={20} width={20} />
            </li>
          </ul>
        </div>
        <div id="light-dark-mode" className="flex gap-[8px]">
          Mode <FaMoon />
        </div>
        <li className="text-sm flex gap-[5px] py-1 pb-2">
          <AiOutlineCopyrightCircle /> NEW TYPE OCEAN LLC/INC 2023 All Rights
          Reserved
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
