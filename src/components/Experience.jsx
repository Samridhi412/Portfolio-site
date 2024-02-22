import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../style";
import { experiences } from "../constants";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{ background: experience.iconBg }}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img 
      src={experience.icon}
      alt={experience.company_name}
      className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{ experience.title }</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{ experience.company_name }</p>
        {experience.source_code_link && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div
                    onClick={() => window.open(experience.source_code_link, "_blank")}
                    className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                    <h5 className="text-[13px] font-bold" style={{ color: '#0000FF'}}><i><b><u>Demo</u></b></i></h5>
                  {/* <img
                      src={github}
                      alt='source code'
                      className='w-1/2 h-1/2 object-contain'
                  /> */}
                </div>
            </div>
        )}
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      { experience.points.map((point, index) => (
        <li
        key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")