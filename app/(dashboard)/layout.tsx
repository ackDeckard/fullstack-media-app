import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="bg-backgroundColor lg:grid lg:grid-cols-[160px_1fr] lg:grid-rows-[min-content_1fr] ">
      <Header />
      <SearchBar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
