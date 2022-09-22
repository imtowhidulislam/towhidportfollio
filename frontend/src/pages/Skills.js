import React, { useEffect, useState } from "react";
import "../style/skill.css";

const skillUrl = "http://localhost:3000/api/skill";

const Skills = () => {
  const [skill, setSkill] = useState([]);

  const showSkill = async () => {
    const res = await fetch(skillUrl);
    const skillData = await res.json();

    return setSkill(skillData);
  };

  useEffect(() => {
    showSkill();
  }, [skill]);
  return (
    <div>
      {skill.map((skill) => {
        const { _id, title, desc, year } = skill;

        return (
          <div className="skill_slide1 slide" key={_id}>
            <li></li>
            <h2 className="skill_title">{title}</h2>
            <p className="skill_desc">{desc}</p>
            <h3 className="skill_exp">
              experience : <strong>{year}</strong> years
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
