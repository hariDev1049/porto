import SchoolIcon from '../SchoolIcon/SchoolIcon';
import WorkIcon from '../WorkIcon/WorkIcon';

import timelineElements from '../../utils/experiencetimeline';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  let workIconStyle = { background: '#f0d6d6' };
  let schoolIconStyle = { background: '#d0e2ec' };

  return (
    <div>
      <h2 className="text-center mb-5">EXPERIENCE</h2>
      <VerticalTimeline className="mb-5">
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === 'work';

          return (
            <VerticalTimelineElement
              visible={true}
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h4 className="vertical-timeline-element-title font-semibold">
                {element.title}
              </h4>
              <h6 className="vertical-timeline-element-subtitle mt-1">
                {element.location}
              </h6>
              <p id="description" className="text-gray-500 text-xs">
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
