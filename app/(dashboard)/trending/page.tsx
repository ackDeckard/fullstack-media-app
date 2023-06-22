import GetData from "@/app/components/GetData";

const TrendingPage = ({ props }) => {
  console.log(props);

  return (
    <div className="h-screen bg-backgroundColor pl-4 text-xl">
      <div className="text-white">Trending</div>

      <GetData showTrendingItems={true} showMoviesByCategory={false} />
    </div>
  );
};

export default TrendingPage;
