import GetData from "../components/GetData";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SearchBar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
