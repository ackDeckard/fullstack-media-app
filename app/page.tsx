import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="mx-auto w-full max-w-[600px] sm:max-w-sm lg:max-w-lg">
        <h1 className="mb-4 text-6xl">
          <span className="text-buttonLoginColor">Unleash</span> your
          Entertainment{" "}
          <Image
            src="logo.svg"
            alt=""
            width={36}
            height={36}
            className="inline"
          />{" "}
          Journey{" "}
        </h1>
        <p className="mb-4 text-xl font-light text-white/40">
          Discover and bookmark your favorite movies and TV series with our
          all-in-one app! Browse, watch, and never miss a moment of
          entertainment.
        </p>
        <div className="flex w-[300px] items-center">
          <Link href="/trending">
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-xl ">
              Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
