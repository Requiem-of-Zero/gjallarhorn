import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-grey max-w-contentContainer">
      <ul className="text-light-grey px-4 pt-4 lgl:justify-center lgl:flex lgl:gap-[300px]">
        <div>
          <li>Information</li>
          <li>About Us</li>
          <li>Help</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </div>

        <div className="py-2">
          Socials
          <ul id="footer-socials" className="flex gap-[10px]">
            <li>
              <a
                href="https://www.xiaohongshu.com/user/profile/5fe43a8f0000000001002554?xhsshare=WeixinSession&appuid=5be34a312f650f0001df5536&apptime=1680834133"
                target="_blank"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/XiaohongshuLOGO.png?20181027065954"
                  height={20}
                  width={20}
                />
              </a>
            </li>
          </ul>
        </div>

        <div id="light-dark-mode" className="flex gap-[8px]">
          Mode <FaMoon />
        </div>
      </ul>
      <p className="px-4 text-light-grey text-sm flex gap-[5px] py-1 pb-2 lgl:justify-center">
        <AiOutlineCopyrightCircle /> NEW TYPE OCEAN LLC/INC 2023 All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
