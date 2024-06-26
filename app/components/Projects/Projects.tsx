import projectElements from '@/app/utils/projectsinfo';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center capitalize">PROJECTS</h2>
      {projectElements.map((element) => {
        return <ProjectCard key={element.id} element={element} />;
      })}
    </div>
  );
};

export default Projects;
