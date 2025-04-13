type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
};

const ProjectCard = ({ title, description, url }: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-[1.01] transition-transform duration-200"
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </a>
  );
};

export default ProjectCard;
