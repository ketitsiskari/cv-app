import React from 'react';
import '../../assets/styles/components-scss/_expertise.scss';
import Box from '../../modules/BoxSection';

const Expertise = ({ data }) => {
  return (
    <section>
        <Box title="Experience"/>
        <div className="expertise-container" data-testid="expertise-container">
        {data.map((experience, index) => (
            <div key={index} className="experience-item">
            <span className="company">{experience.info.company}</span>
            <span className="date">{experience.date}</span>
            <h4 className="job">{experience.info.job}</h4>
            <p className="description">{experience.info.description}</p>
            </div>
        ))}
        </div>
    </section>
  );
};
export default Expertise;
