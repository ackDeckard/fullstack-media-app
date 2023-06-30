import GetData from "@/app/components/GetData";

const TvSeries = () => {
  return (
    <div className="ml-4 bg-backgroundColor text-xl lg:col-start-2  ">
      <div className="mb-[25px] text-white">Tv-Series</div>
      <GetData
        showTrendingItems={false}
        showMoviesByCategory={false}
        showTvSeries={true}
        showAll={false}
        showBookMarked={false}
      />
    </div>
  );
};

export default TvSeries;
