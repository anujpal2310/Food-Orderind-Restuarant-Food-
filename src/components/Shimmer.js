const Shimmer = () => {
  return (
    <div className="bg-yellow-50 flex flex-wrap">
      <div className="border border-black w-64 h-52 m-2">
        <div className="bg-gray-300 w-60 m-2 h-24"></div>
        <div className="bg-gray-300 w-60 m-2 h-8"></div>
        <div className="flex items-center justify-between">
          <div className="bg-gray-300 w-10 ml-2 h-8 rounded-3xl"></div>
          <div className="w-20 bg-gray-300 h-8 mr-2 rounded-full"></div>
        </div>
        <div className="bg-gray-300 w-60 m-2 h-3"></div>
      </div>
    </div>
  );
};
export default Shimmer;
