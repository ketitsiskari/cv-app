import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../../assets/styles/layout/_panel.scss';
import PhotoBox from '../PhotoBox';
import Navigation from '../Navigation/index';
import Button from '../Button/index';
import { faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/images/avatar.png';

const Panel = ({ isPanelOpen, togglePanel }) => {
    const navigate = useNavigate();

    const handleGoBackClick = () => {
      navigate('/');
    };

    return (
      <div className="panel-container">
        <Button 
            icon={faBars} 
            onClick={togglePanel}
            className={`hamburger ${isPanelOpen ? 'open' : 'closed'}`}
        />

        {isPanelOpen && (
          <div className="main-container-button">
            <aside className='panel'>
              <PhotoBox 
                  name="Ketevan Tsiskaridze"
                  avatar={avatar}
                  viewType={2} 
              />
              <Navigation />
              <Button icon={faChevronLeft} text="Go back" onClick={handleGoBackClick} />
            </aside>
          </div>
        )}
      </div>
    );
};

export default Panel;
