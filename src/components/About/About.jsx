import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/main-pic.jpg';
import { services } from '../../constants.js';
import { fadeIn } from '../../utils/motion';

/* ──────────────────────────────────────────
   Single service/role card
   (Tilt + inner content)
   Outer box & glow handled by parent wrapper.
────────────────────────────────────────── */
const ServiceCard = ({ title, icon }) => (
  <Tilt
    className="w-full select-none"
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope
  >
    <div className="rounded-[24px] bg-[#1d1836] py-10 px-8 flex flex-col items-center justify-evenly">
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      <h3 className="mt-4 text-white text-lg font-bold text-center">{title}</h3>
    </div>
  </Tilt>
);

/* ──────────────────────────────────────────
   About Section Component
────────────────────────────────────────── */
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {/* Header */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Aditya
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Fullstack Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a full-stack web developer skilled in the MERN stack and modern frontend tools. Currently working on full-stack projects and looking for an opportunity to apply my skills.
          </p>
          <a
            href="https://drive.google.com/file/d/1BnTmn2saqAfPfpnn-D7JrBSqoUBqUCpT/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-transform duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope
          >
            <img
              src={profileImage}
              alt="Aditya"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>

      {/* Roles / Services */}
      <div className="mt-20">
        <h2 className="text-left text-2xl font-bold mb-8 bg-gradient-to-r from-purple-900 via-white to-purple-700 text-transparent bg-clip-text">
          The Roles I am Looking For –
        </h2>
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
              whileHover={{ scale: 1.05 }}
              className="group w-[260px] rounded-[28px] p-[2px] bg-[rgba(255,255,255,0.05)] backdrop-blur border border-purple-600/60 transition-all duration-300 hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
