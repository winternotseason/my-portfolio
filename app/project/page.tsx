import Link from "next/link";
import MovieFinderImages from "./_component/MovieFinderImages";
import MineInfo from "./_component/MineInfo";
import MovieFinderInfo from "./_component/MovieFinderInfo";
import PortfolioInfo from "./_component/PortfolioInfo";

const Project = () => {
  return (
    <div className="w-full h-full px-4 pb-4 md:px-10 md:py-7">
      {/* mine */}
      <MineInfo />
      {/* moviefinder */}
      <MovieFinderInfo />
      {/* Portfolio */}

      <PortfolioInfo />
    </div>
  );
};

export default Project;

// pc-2 240px
// pc-3 500px
