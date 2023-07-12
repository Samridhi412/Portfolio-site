import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../style";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const AchievementCard = ({ achievement }) => (
  <VerticalTimelineElement
  contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img
      src={achievement.icon}
      className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }
  >
    <ul className="mt-5 list-disc ml-5 space-y-2">
      { achievement.points.map((point, index) => (
        <li
        key={`achievement-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
    </VerticalTimelineElement>
)
const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Some Notable work
        </p>
        <h2 className={styles.sectionHeadText}>
          Achievements.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Achievements, "achievements")