import Link from "next/link";
import MovieFinderImages from "./_component/MovieFinderImages";
import MineInfo from "./_component/MineInfo";
import MovieFinderInfo from "./_component/MovieFinderInfo";
import PortfolioInfo from "./_component/PortfolioInfo";

const Project = () => {
  return (
    <div className="w-full h-full px-4 pt-2 md:px-10 md:py-7">
      <p className="mt-5 font-light text-sm md:text-xl">📑 PROJECTS</p>
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
