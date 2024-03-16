import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative bg-gray-400">
      {/* Courses */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-bold text-lg lg:flex">
        <p className="absolute left-10 top-5 flex justify-center items-center border-white-600">
          Courses
        </p>
      </div>
      {/* Course Items */}
      <div className="absolute left-10 top-20 flex flex-col space-y-4 items-start justify-end rounded-lg">
        {/* Rectangle 1 */}
        <div className="course-item h-16 md:h-24 w-36 md:w-64 bg-blue-600 text-white flex justify-center items-center hover:bg-blue-600 rounded-lg p-2 md:p-4 cursor-pointer font-bold">
          Course 1
        </div>
        {/* Rectangle 2 */}
        <div className="course-item h-16 md:h-24 w-36 md:w-64 bg-blue-600 text-white flex justify-center items-center hover:bg-blue-600 rounded-lg p-2 md:p-4 cursor-pointer font-bold">
          Course 2
        </div>
        {/* Rectangle 3 */}
        <div className="course-item h-16 md:h-24 w-36 md:w-64 bg-blue-600 text-white flex justify-center items-center hover:bg-blue-600 rounded-lg p-2 md:p-4 cursor-pointer font-bold">
          Course 3
        </div>
        {/* Rectangle 4 */}
        <div className="course-item h-16 md:h-24 w-36 md:w-64 bg-blue-600 text-white flex justify-center items-center hover:bg-blue-600 rounded-lg p-2 md:p-4 cursor-pointer font-bold">
          Course 4
        </div>
        {/* Add a course */}
        <div className="course-item h-16 md:h-12 w-36 md:w-64 bg-green-600 text-white flex justify-center items-center hover:bg-green-600 p-2 md:p-4 cursor-pointer rounded-lg font-bold">
          Add a course
        </div>
      </div>
      {/* Course Summary */}
      <div className="course-summary absolute right-5 top-5 md:right-40 ">
        <p className="font-bold text-lg text-white ">Course Summary</p>
      </div>
      {/* Summary Box */}
      <div className="summary-box absolute right-10 top-20 md:right-20 md:w-96 h-96 flex flex-col items-center justify-top bg-gray-100 rounded-lg p-4 font-bold">
        {/* Additional summary content can be added here */}
        <p style={{ color: "black" }}>Summary content will display here</p>
      </div>
    </main>
  );
}
