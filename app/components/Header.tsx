import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul className='flex gap-1 bg-blue-500 '>
        <li className='text-green-500'>
          <Link href={"api/auth/signin"}>Sign in</Link>
        </li>
        <li className='text-gray-600-500'>
          <Link href={"/"}>home</Link>
        </li>
        <li className='text-red-700 '>
          <Link href={"api/auth/signout"}>Sign out</Link>
        </li>
      </ul>
    </div>
  );
}
