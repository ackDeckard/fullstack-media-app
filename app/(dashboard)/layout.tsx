import { Suspense } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Loading from "./loading";
import { DataFetchingProvider } from "../context/DataFetchingContext";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <DataFetchingProvider>
        <div className="bg-backgroundColor lg:grid lg:grid-cols-[160px_1fr]">
          <Header />
          <SearchBar />
          {children}
        </div>
      </DataFetchingProvider>
    </Suspense>
  );
};

export default DashBoardLayout;
