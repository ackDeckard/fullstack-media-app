import GetData from "@/app/components/GetData";

const Movies = () => {
  return (
    <div className="bg-backgroundColor  pl-6 text-xl lg:col-start-2 ">
      <div className="mb-[25px] text-white">Movies</div>
      <GetData
        showTrendingItems={false}
        showMoviesByCategory={true}
        showTvSeries={false}
        showAll={false}
        showBookMarked={false}
      />
    </div>
  );
};

export default Movies;
