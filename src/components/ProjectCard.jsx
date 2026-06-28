import { ArrowUpRight } from "lucide-react";
const ProjectCard = ({ title, description, tech, src, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-header flex flex-row">

        <h3 className="text-white text-xl">{title}</h3>
        <ArrowUpRight size={20} color="white" className="flex-1 items-end"/>
      </div>
      <img src={src} className="w-full h-full"/>

      <p className="project-card-desc">
        {description}
      </p>

      <div className="project-card-footer">
        {tech.map((t, i) => (
          <span key={i} className="project-chip">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;