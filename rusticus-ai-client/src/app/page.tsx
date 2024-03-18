import React from 'react';

export default function Home() {
  const summaryBoxWidth = "600px"; // To change the width of the course summary box

  // Courses can be added or deleted if needed.
  const courses = [
    "CSCI 414",
    "CSCI 411",
    "CSCI 301",
    "CSCI 332",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative bg-gray-400">
      {/* Courses */}
      <div className="max-w-5xl w-full font-bold text-lg lg:flex">
        <div className="flex justify-between border-b border-white-600">
          <p>Courses</p>
        </div>
      </div>
      {/* Course Items */}
      <div className="flex flex-col md:flex-row mt-5 md:items-start md:justify-start md:space-x-4">
        {courses.map((course, index) => (
          <div key={index} className="course-item bg-blue-600 text-white hover:bg-blue-900 rounded-lg px-6 py-3 cursor-pointer font-bold mb-2 md:mb-0">
            {course}
          </div>
        ))}
        {/* Add a course */}
        <div className="course-item bg-green-600 text-white hover:bg-green-900 rounded-lg px-6 py-3 cursor-pointer font-bold md:mb-0">
          Add a course
        </div>
      </div>
      {/* Course Summary */}
      <div className="font-bold text-lg text-white mt-5 md:mt-5 md:mr-25">
      CSCI 414 Course Summary 
      </div>
      {/* Summary Box */}
      <div className="summary-box mt-5 md:mt-5 md:w-96 md:h-96" style={{ width: summaryBoxWidth }}>
        <div className="bg-gray-100 rounded-lg p-4 font-bold overflow-auto h-full">
          <p style={{ color: "navy", textIndent: "1em" }}>
            In the database management course, students delve into the fundamental principles and 
            practices essential for effective database design, implementation, and maintenance. The 
            curriculum encompasses a comprehensive exploration of database systems, covering topics 
            such as relational database modeling, SQL query optimization, and database security protocols. 
            Through hands-on projects and case studies, learners acquire practical skills in designing 
            relational schemas, writing complex SQL queries, and optimizing database performance. 
            Additionally, students examine emerging trends in database technologies, including NoSQL 
            databases and cloud-based database services, to stay abreast of industry advancements. By the 
            course's conclusion, participants emerge with a profound understanding of database 
            management concepts and are equipped with the proficiency to design and manage robust 
            database systems tailored to diverse organizational needs.
          </p>
        </div>
      </div>
    </main>
  );
}
