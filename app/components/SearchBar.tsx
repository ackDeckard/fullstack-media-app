"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <section className="relative w-full bg-backgroundColor px-4 py-6 lg:col-start-2 lg:row-start-1 lg:mt-8">
      <form action="" onSubmit={onSearch}>
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="h-6 w-full bg-backgroundColor pl-10 text-white/50 placeholder:text-white placeholder:opacity-50"
          placeholder="Search for movies or TV series"
        />

        <Image
          src="icon-search.svg"
          alt=""
          width={24}
          height={24}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform"
        />
      </form>
    </section>
  );
};

export default SearchBar;
