import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoBox from '../components/PhotoBox';
import '../assets/styles/pages/_home.scss';
import avatar from '../assets/images/avatar.png';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/inner');
  };

  return (
    <div data-testid="home-container" className="home-container">
      <PhotoBox
        name="Ketevan Tsiskaridze" 
        title="Programmer. FrontEnd Developer" 
        description="A lifelong learner who keeps up-to-date with industry trends and continually seeks out new technologies and methods to master" 
        avatar={avatar}
        viewType={1} // viewType={2} for the second view
      />
      <Button text="Know more" onClick={handleKnowMoreClick} />
    </div>
  );
};

export default Home;
