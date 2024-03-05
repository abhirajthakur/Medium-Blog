export const Quote = () => {
  return (
    <div className="h-screen flex flex-col justify-center bg-blue-100 p-8">
      <blockquote className="mx-auto max-w-lg text-justify text-3xl font-semibold italic text-gray-600">
        “I choose a lazy person to do a hard job. Because a lazy person will
        find an easy way to do it.”
      </blockquote>
      <cite className="text-left xl:px-8 2xl:px-80 mt-4 text-xl font-normal text-gray-500">
        - Bill Gates
      </cite>
    </div>
  );
};
