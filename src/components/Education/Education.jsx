import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here are the details of my academic background
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-white h-full" />

          {/* Education Entries */}
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-center mb-16">
              {/* Content Card */}
              <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 mx-auto">
                {/* Card inner: logo + text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo */}
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school || "Education logo"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree + school + date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
