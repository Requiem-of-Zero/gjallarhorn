import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-grey">
      <ul className="text-light-grey px-4 pt-4 lgl:justify-center lgl:flex lgl:items-start lgl:gap-[300px] max-w-contentContainer m0a">
        <div className="pb-2 flex flex-col">
          <li>Information</li>
          <Link href='/about' className="hover:underline hover:text-white">About Us</Link>
          <Link href='/help' className="hover:underline hover:text-white">Help</Link>
          <Link href='/terms-and-conditions' className="hover:underline hover:text-white">Terms of Use</Link>
          <Link href='/privacy' className="hover:underline hover:text-white">Privacy Policy</Link>
        </div>

        <div>
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
                  alt='red book'
                />
              </a>
            </li>
          </ul>
        </div>

        <div id="light-dark-mode" className="flex gap-[8px] items-center">
          Mode <FaMoon />
        </div>
      </ul>
      <p className="px-4 text-light-grey text-sm flex gap-[5px] py-1 pb-2 justify-center items-center">
        <AiOutlineCopyrightCircle /> GHALLAJORN INC 2023 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
