import React, { useState, useEffect } from 'react';
import About from '../components/Box/index';
import Expertise from '../components/Expertise/index';
import experiences from '../modules/Expertise';
import TimeLine from '../components/Timeline/index';
import Panel from '../components/Panel/index';
import '../assets/styles/pages/_inner.scss'
import Portfolio from '../components/Portfolio/index';
import MyAddress from '../components/Address/index';
import { Feedback } from '../components/Feedback/index';
import feedbackData from '../modules/feedbackData';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import { Skills } from '../components/Skills';

const InnerPage = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(true);

    const togglePanel = () => {
      setIsPanelOpen(prevState => !prevState);
    };

    useEffect(() => {
      const handleResize = () => {
        setIsPanelOpen(window.innerWidth > 450);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <div className="inner-container">
        <Button 
            icon={faBars} 
            onClick={togglePanel}
            className={`hamburger ${isPanelOpen ? 'open' : 'closed'}`}
        />
        {isPanelOpen && (
            <Panel isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
        )}

        <div className="main-content">
          <div id="about">
            <About />
          </div>
          <div id="education">
            <TimeLine />
          </div>
          <div id="expertise">
            <Expertise data={experiences} />
          </div>
          <div id='skills'>
            <Skills/>
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="contact">
            <MyAddress/>
          </div>
          <div id="feedback">
            <Feedback data={feedbackData} />
          </div>
        </div>
      </div>
  );
};

export default InnerPage;
