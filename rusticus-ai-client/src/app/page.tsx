import Image from "next/image";

export default function Home() {
  // Define the width variable
  const summaryBoxWidth = "700px"; // we can change the width to any desired size

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative bg-gray-400">
      {/* Lecture */}
      <div className="max-w-5xl w-full font-bold text-lg lg:flex">
        <div className="flex justify-between border-b border-white-600">
          <p className="mr-4">CSCI 332</p>
          <p className="mr-4">Week 3 Lecture</p>
          <p className="ml-4">3/19/2024</p>
        </div>
        {/* Upload button */}
        <div className="ml-auto">
          <div className="course-item h-16 md:h-12 w-36 md:w-64 bg-green-600 text-white flex justify-center items-center hover:bg-green-900 p-2 md:p-4 cursor-pointer rounded-lg font-bold">
            Upload
          </div>
        </div>
      </div>
      {/* Lecture Summary */}
      <div className="font-bold text-lg text-white mt-5 md:mt-0 md:mr-25">
        Lecture Summary
      </div>
      {/* Summary Box */}
      <div
        className="summary-box mt-10 md:mt-25 md:w-96 md:h-96"
        style={{ width: summaryBoxWidth }}
      >
        <div className="bg-gray-100 rounded-lg p-4 font-bold overflow-auto h-full">
          <p style={{ color: "navy", textIndent: "1em" }}>
            The professor emphasized the distinction between emotional and
            intellectual decision making in a variety of scenarios, including
            ethical quandaries and professional settings. The discussion goes
            into hot and cold cognition, empathy deficiencies in psychopathy and
            sociopathy, and the importance of emotions in decision-making.
          </p>
          <p style={{ color: "navy", textIndent: "1em" }}>
            The lecture concluded with a discussion of cultural development and
            its function in encouraging group cohesiveness, as well as the
            difficulties presented by individual self-interest in collective
            decision-making processes. The professor encourages us to consider
            these principles in a variety of settings, ranging from corporate
            management to societal dynamics, emphasizing the need of
            understanding both emotional and intellectual motives in human
            action.
          </p>
          <p style={{ color: "navy", textIndent: "1em" }}>
            The professor talked on a variety of interrelated themes, beginning
            with the significance of emotions in decision-making, notably in
            computer science and race conditions created by cosmic rays. This
            prompted a discussion on the Certainty Principle, which emphasizes
            the difficulties of making unambiguous decisions in systems having
            metastable states.
          </p>
          <p style={{ color: "navy", textIndent: "1em" }}>
            Moving on to cultural development, the professor discussed the
            notion of cultural rivalry and contrasted it with genetic evolution.
            He investigated how cultural groupings achieve success and stability
            via conformity and collaboration.
          </p>
        </div>
      </div>
    </main>
  );
}
