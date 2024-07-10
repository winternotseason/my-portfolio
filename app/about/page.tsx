import Info from "../_component/info";

export default function About() {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      {/* header */}
      <div className="w-[60rem] mt-16">
        {/* main-contents header */}
        <div className="w-full flex items-center py-14 px-10">
          <div className="text-4xl border-l-8 border-indigo-800 pl-3 font-semibold">
            황서연(Hwang SeoYeon)
          </div>
        </div>
        <Info />
      </div>
    </div>
  );
}
