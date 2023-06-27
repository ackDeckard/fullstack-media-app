import { Suspense } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Loading from "./loading";

const DashBoardLayout = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-backgroundColor lg:grid lg:grid-cols-[160px_1fr] lg:grid-rows-[min-content_1fr] ">
        <Header />
        <SearchBar />
        {children}
      </div>
    </Suspense>
  );
};

export default DashBoardLayout;
