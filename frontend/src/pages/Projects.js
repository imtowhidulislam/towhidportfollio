import React, { useEffect, useState } from "react";
import "../style/project.css";
import { FaGithubSquare, FaLink } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
const projectUrl = "http://localhost:3000/project";
const Projects = () => {
  const [project, setProject] = useState([]);

  const showProject = async () => {
    const res = await fetch(projectUrl);
    const projData = await res.json();

    return setProject(projData);
  };

  useEffect(() => {
    showProject();
  }, [project]);

  return (
    <>
      {project.map((singleProject) => {
        const { _id, title, category, description, sourceLink, gitHub } =
          singleProject;
        return (
          <div className="single_project" key={_id}>
            <div className="icon">
              <i className="fab fa-js"></i>
            </div>
            <h2 className="project_name text-blue-400">{title}</h2>
            <h4 className="project_ctg">{category}</h4>
            <p className="project_dsc">{description}</p>
            <div className="btn_container">
              <button className="btn hover:bg-slate-100">
                <a href={sourceLink} className="btn_prj ripple_btn btn-1">
                  <FaGithubSquare />
                </a>
              </button>
              <button className="btn">
                <a href={gitHub} className="btn_prj ripple_btn btn-2">
                  <FiLink />
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
