import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        Projects
      </h2>
      <div className="grid gap-6 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
