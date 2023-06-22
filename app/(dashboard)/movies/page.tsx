import GetData from "@/app/components/GetData";

const Movies = ({ props }) => {
  console.log(props);

  return (
    <div className="h-screen bg-backgroundColor pl-4 text-xl">
      <div className="text-white">Trending</div>

      <GetData showTrendingItems={false} showMoviesByCategory={true} />
    </div>
  );
};

export default Movies;
