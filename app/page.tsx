import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="mx-auto w-full max-w-[600px]">
        <h1 className="mb-4 text-6xl">Unleash Your Entertainment Journey.</h1>
        <p className="mb-4 text-xl text-white/60">
          Discover and bookmark your favorite movies and TV series with our
          all-in-one app! Browse, watch, and never miss a moment of
          entertainment.
        </p>
        <div className="w-[300px]">
          <Link href="/trending">
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-xl ">
              Access
            </button>
          </Link>
          <small className="italic">
            You can use "testing" and password "testing"
          </small>
        </div>
      </div>
    </div>
  );
}
