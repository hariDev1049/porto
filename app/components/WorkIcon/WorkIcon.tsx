import work from '@/public/work.svg';
import Image from 'next/image';
const WorkIcon = () => {
  return (
    <div className="flex justify-center pt-2.5">
      <Image
        src={work}
        alt="Work Logo"
        width={37}
        height={37}
        className="max-sm:w-2/3 sm:w-2/3 md:w-3/4 lg:w-2/3"
      />
    </div>
  );
};

export default WorkIcon;
