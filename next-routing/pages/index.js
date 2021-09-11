import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  function handleClick() {
    router.push("/product");
  }
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
