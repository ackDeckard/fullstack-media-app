import GetData from "@/app/components/GetData";

const TrendingPage = () => {
  return (
    <div className="overflow-x-scroll bg-backgroundColor pl-6">
      <div className="text-xl">
        <div className="mb-[25px] pb-4 tracking-tight text-white">Trending</div>
        <GetData
          showTrendingItems={true}
          showMoviesByCategory={false}
          showTvSeries={false}
          showAll={false}
          showBookMarked={false}
        />
      </div>

      <div className="text-xl lg:pt-8">
        <div className="mb-[25px] text-white">Recommended for you</div>
        <GetData
          showTrendingItems={false}
          showMoviesByCategory={false}
          showTvSeries={false}
          showAll={true}
          showBookMarked={false}
        />
      </div>
    </div>
  );
};

export default TrendingPage;
