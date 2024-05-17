import projectElements from '@/app/utils/projectsinfo';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className="my-2 sm:my-5 flex flex-col items-center flex-grow">
      {projectElements.map((element) => {
        return <ProjectCard key={element.id} element={element} />;
      })}
    </div>
  );
};

export default Projects;
