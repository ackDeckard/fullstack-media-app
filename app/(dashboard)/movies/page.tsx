import GetData from "@/app/components/GetData";

const Movies = () => {
  return (
    <div className="lg:col-start-2 lg:h-[90%] lg:pt-8">
      <div className="bg-backgroundColor pl-4 text-xl">
        <div className="text-white">Movies</div>
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

export default Movies;
