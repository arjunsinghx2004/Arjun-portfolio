"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-gray-950 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          My Resume
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="text-blue-400 w-6 h-6" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">BCA (AIDA)</h4>
                <p className="text-gray-400">LNCT University, Bhopal</p>
                <p className="text-sm text-gray-500">2023 – 2026 (Ongoing)</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">High School</h4>
                <p className="text-gray-400">Your School Name</p>
                <p className="text-sm text-gray-500">Completed in 2023</p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-5">
              <Briefcase className="text-blue-400 w-6 h-6" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Founder — NotesSenote</h4>
                <p className="text-gray-400">Startup Project</p>
                <p className="text-sm text-gray-500">
                  Building a platform for students to share notes and study
                  materials.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Web Development Intern</h4>
                <p className="text-gray-400">Freelance / Remote</p>
                <p className="text-sm text-gray-500">
                  Worked on building modern web apps using Next.js and Tailwind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-3 mb-5">
            <Code2 className="text-blue-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold">Skills</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "C++",
              "Python",
              "Git/GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-500/20 border border-blue-500 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
