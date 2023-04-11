import Link from "next/link";

const LoginSubheader = () => {
  return (
    <div>
      <ul id='subheader' className="flex justify-end text-[#A1A7AD] gap-2 text-sm h-9">
        <Link href="/help" className="pr-2 hover:text-white">
          help
        </Link>
        <Link href="/login" className="hover:text-white">
          sign in
        </Link>
        <li>/</li>
        <Link href="/register" className="hover:text-white">
          register
        </Link>
      </ul>
    </div>
  );
}

export default LoginSubheader