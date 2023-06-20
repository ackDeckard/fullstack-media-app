"use client";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import AddDataFirebase from "@/app/components/AddData";

const Search = () => {
  const search = useSearchParams();

  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  console.log("Search", encodedSearchQuery);

  return (
    <section>
      <Header />
      Search page
    </section>
  );
};

export default Search;
