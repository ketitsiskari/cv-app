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
        name="John Doe" 
        title="Programmer. Creative. Innovator" 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque" 
        avatar={avatar}
        viewType={1} // viewType={2} for the second view
      />
      <Button text="Know more" onClick={handleKnowMoreClick} />
    </div>
  );
};

export default Home;
