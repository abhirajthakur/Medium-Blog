export const BlogsLoadingSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto py-5 px-4 mb-2 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="h-8 w-8 bg-gray-200 rounded-full" />
        <div className="h-1.5 bg-gray-200 rounded-full w-12 ml-4" />
        <div className="h-1 w-1 ml-4 rounded-full bg-slate-500" />
        <div className="h-1.5 bg-gray-200 rounded-full w-16 ml-4" />
      </div>
      <h3 className="text-2xl font-bold mb-4">
        <div className="h-5 bg-gray-200 rounded-full w-2/6 mb-4" />
      </h3>
      <div className="h-2 bg-gray-200 rounded-full w-4/5 mb-4" />
      <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-4" />
      <hr className="h-[1px] border-t-0 bg-neutral-200 opacity-100" />
    </div>
  );
};
