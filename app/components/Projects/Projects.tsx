import projectElements from '@/app/utils/projectsinfo';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className="mb-5 flex flex-col items-center">
      <h2 className="text-center mb-5">PROJECTS</h2>
      {projectElements.map((element) => {
        return <ProjectCard key={element.id} element={element} />;
      })}
    </div>
  );
};

export default Projects;
