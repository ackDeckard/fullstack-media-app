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
    <header>
      <div className="flex h-[56px] items-center justify-between bg-bgSignInOutNavBarColor  p-4">
        <Image src="logo.svg" alt="logo" width={25} height={20} />

        <div className="flex items-center gap-6">
          <Link href="/">
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

      <SearchBar />
      <SignedOut></SignedOut>
    </header>
  );
}

export default Header;
