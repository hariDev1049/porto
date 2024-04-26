'use client';
import SchoolIcon from '@/app/components/SchoolIcon/SchoolIcon';
import WorkIcon from '@/app/components/WorkIcon/WorkIcon';

import timelineElements from '@/app/utils/experiencetimeline';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const page = () => {
  let workIconStyle = { background: '#f0d6d6' };
  let schoolIconStyle = { background: '#d0e2ec' };

  return (
    <div className="mt-5">
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

export default page;
