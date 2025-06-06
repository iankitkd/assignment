import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4 gap-4">
      <Link href="/signup" className="rounded-full bg-gradient-to-r from-left-color to-right-color text-white px-4 py-2">Sign up</Link>
      <Link href="/dashboard" className="rounded-full border border-left-color px-4 py-2">Dashboard</Link>
    </div>
  );
}
