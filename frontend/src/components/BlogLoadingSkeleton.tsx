export const BlogLoadingSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-5 animate-pulse">
      <div className="h-8 bg-gray-200 rounded-full w-5/6 mb-4" />
      <div className="h-8 bg-gray-200 rounded-full w-3/6 mb-4" />
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-8 w-8 rounded-full bg-slate-500" />
        <div className="h-2 bg-gray-200 rounded-full w-12" />
      </div>
      <article className="pl-3">
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <br />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full w-11/12 mb-4" />
      </article>
    </div>
  );
};
