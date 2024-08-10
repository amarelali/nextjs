import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/products" className="text-blue-300 underline">Products Page</Link>
    </>
  );
}
