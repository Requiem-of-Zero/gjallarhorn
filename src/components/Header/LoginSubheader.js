import Link from "next/link";

const LoginSubheader = () => {
  return (
    <div>
      <ul className="flex justify-end text-[#A1A7AD] gap-2 text-sm h-9">
        <li className="pr-2">help</li>
        <Link href="/login">sign in</Link>
        <li>/</li>
        <Link href='/register'>register</Link>
      </ul>
    </div>
  );
}

export default LoginSubheader