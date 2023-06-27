import GetData from "@/app/components/GetData";

const Movies = () => {
  return (
    <div className="h-screen bg-backgroundColor lg:col-start-2 lg:pt-8 ">
      <div className="pl-4 text-xl">
        <div className="text-white">Movies</div>
        <GetData
          showTrendingItems={false}
          showMoviesByCategory={true}
          showTvSeries={false}
          showAll={false}
        />
      </div>
    </div>
  );
};

export default Movies;
