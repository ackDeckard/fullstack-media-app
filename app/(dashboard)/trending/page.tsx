import GetData from "@/app/components/GetData";

const TrendingPage = () => {
  return (
    <div className="lg:col-start-2 lg:h-[90%] lg:pt-8">
      <div className="bg-backgroundColor pl-4 text-xl">
        <div className="pb-4 tracking-tight text-white">Trending</div>

        {/* <GetData
          showTrendingItems={true}
          showMoviesByCategory={false}
          showAll={false}
        /> */}
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
