import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-secondary text-lg leading-loose"
      >
        {showFullText ? (
          <>
            Four years ago, I embarked on an enthralling journey into the world of website development, discovering my passion for crafting meaningful software solutions. As I delved deeper into this exciting field, I realized that creating applications that positively impact users' lives is my true calling.
            <br />
            <br />
            Throughout my career, I have proactively embraced opportunities to learn and grow, taking on personal projects that have expanded my expertise in a diverse range of technologies. I have had the privilege of contributing to impactful projects as a Software Developer at Byjus, where I honed my skills and experienced the dynamic environment of a leading organization. Working on projects involving Linux, Windows, Docker, and basic Kubernetes has broadened my horizons and enabled me to deploy scalable and efficient solutions.
            <br />
            <br />
            In addition to my proficiency in C++, Python, Ruby, Golang, SQL, Postgres, with expertise in frameworks like Django, Flask, Rails, and React, I have also engaged in performance optimization and debugging to fine-tune applications for peak performance. Moreover, I have leveraged advanced data management systems like Snowflake, ensuring smooth data handling and analysis for data-driven solutions.
            <br />
            <br />
            As I progress in my career, I find myself eager to explore new horizons and challenges that further align with my aspirations. My dedication to continuous learning has equipped me with an extensive skill set and a comprehensive understanding of software development principles. I strongly believe that every project I undertake presents an opportunity for innovation and growth. Now, as I seek new opportunities, I am excited to channel my enthusiasm, adaptability, and problem-solving abilities into contributing to groundbreaking ventures and driving progress. Let's join forces to transform ideas into reality and pioneer innovation in the ever-evolving landscape of software development.
          </>
        ) : (
          <>
            Four years ago, I embarked on an enthralling journey into the world of website development, discovering my passion for crafting meaningful software solutions. As I delved deeper into this exciting field, I realized that creating applications that positively impact users' lives is my true calling.
          </>
        )}
        <br />
        <br />
        <motion.button
          variants={fadeIn("up", "spring", 0.1, 0.5)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-primary underline bg-white py-2 px-4 rounded cursor-pointer"
          onClick={toggleTextVisibility}
        >
          {showFullText ? "Read Less" : "Read More"}
        </motion.button>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
