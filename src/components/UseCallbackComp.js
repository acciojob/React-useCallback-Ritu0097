import React, { useState, useCallback } from 'react';

const UseCallbackComp = () => {
  const [inputValue, setInputValue] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addSkill = useCallback(() => {
    if (inputValue.trim() !== '' && !skills.includes(inputValue)) {
      setSkills([...skills, inputValue]);
      setInputValue('');
    }
  }, [inputValue, skills]);

  return (
    <div>
      <h1 id="heading">Skills</h1>
      <input
        type="text"
        id="skill-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button id="skill-add-btn" onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} setSkills={setSkills} />
    </div>
  );
};

const SkillList = ({ skills, setSkills }) => {
  const handleSkillDelete = useCallback((index) => {
    setSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills.splice(index, 1);
      return newSkills;
    });
  }, [setSkills]);

  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li key={index} id={`skill-number-${index}`} onClick={() => handleSkillDelete(index)}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default UseCallbackComp;
