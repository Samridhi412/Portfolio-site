import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../style";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ ed }) => (
  <VerticalTimelineElement
  contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={ed.date}
  iconStyle={{ background: ed.iconBg }}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img
      src={ed.icon}
      alt={ed.company_name}
      className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{ ed.title }</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{ ed.company_name }</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      { ed.points.map((point, index) => (
        <li
        key={`education-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Recent Qualification in Studies.
        </p>
        <h2 className={styles.sectionHeadText}>
          Education
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((ed, index) => (
            <EducationCard key={index} ed={ed} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education, "education")