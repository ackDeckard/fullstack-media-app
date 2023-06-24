import React from "react";
import Image from "next/image";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import Link from "next/link";

function Header() {
  return (
    <header className=" bg-backgroundColor md:flex md:flex-col md:pt-4">
      <div className="flex h-[56px] items-center justify-between rounded-[10px] bg-bgSignInOutNavBarColor p-4 md:mx-auto   md:h-[72px] md:w-[719px] ">
        <Image src="logo.svg" alt="logo" width={25} height={20} />

        <div className="flex items-center gap-6">
          <Link href="/trending">
            <Image
              src="icon-nav-home.svg"
              alt="Return to Homepage"
              width={16}
              height={16}
            />
          </Link>
          <Link href="/movies">
            <Image
              src="icon-nav-movies.svg"
              alt="View all movies"
              width={16}
              height={16}
            />
          </Link>
          <Link href="/tv-series">
            <Image src="icon-nav-tv-series.svg" alt="" width={16} height={16} />
          </Link>
          <Link href="/bookmarks">
            <Image src="icon-nav-bookmark.svg" alt="" width={16} height={16} />
          </Link>
        </div>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
