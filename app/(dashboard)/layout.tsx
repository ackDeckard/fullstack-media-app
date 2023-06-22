import GetData from "../components/GetData";
import Header from "../components/Header";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DashBoardLayout;
