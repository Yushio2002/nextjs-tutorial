import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Welcome to my home page</h1>
      <Link href="/about">about</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Product</Link>
    </div>
  );
}
