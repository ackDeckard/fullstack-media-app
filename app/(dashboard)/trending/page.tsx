import GetData from "@/app/components/GetData";

const TrendingPage = ({ props }) => {
  console.log(props);

  return (
    <div>
      <div className="bg-backgroundColor pl-4 text-xl">
        <div className="text-white">Trending</div>

        <GetData
          showTrendingItems={true}
          showMoviesByCategory={false}
          showAll={false}
        />
      </div>
      <div className="bg-backgroundColor pl-4 text-xl">
        <div className="text-white">Recommended for you</div>
        <GetData
          showTrendingItems={false}
          showMoviesByCategory={false}
          showAll={true}
        />
      </div>
    </div>
  );
};

export default TrendingPage;
