import GetData from "@/app/components/GetData";

const TvSeries = () => {
  return (
    <div className="h-screen lg:col-start-2 lg:pt-8">
      <div className="bg-backgroundColor pl-4 text-xl">
        <div className="text-white">Tv-Series</div>
        <GetData
          showTrendingItems={false}
          showMoviesByCategory={false}
          showTvSeries={true}
          showAll={false}
        />
      </div>
    </div>
  );
};

export default TvSeries;
