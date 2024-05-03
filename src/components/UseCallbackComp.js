import React, { useState, useCallback } from 'react';

const SkillList = React.memo(({ skills, onDeleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={skill} id={`skill-${index}`} onClick={() => onDeleteSkill(skill)}>
          {skill}
        </li>
      ))}
    </ul>
  );
});

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = useCallback(() => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills((prevSkills) => [...prevSkills, newSkill.trim()]);
      setNewSkill('');
    }
  }, [newSkill, skills]);

  const handleDeleteSkill = useCallback(
    (skillToDelete) => {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    },
    []
  );

  return (
    <div>
      <h2 id="heading">Skills Manager</h2>
      <input id="skill-input" type="text" value={newSkill} onChange={handleInputChange} />
      <button id="skill-add-btn" onClick={handleAddSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDeleteSkill={handleDeleteSkill} />
    </div>
  );
};

export default UseCallbackComp;