import React, { useState } from 'react';
import About from '../components/Box/index';
import Expertise from '../components/Expertise/index';
import experiences from '../modules/Expertise';
import TimeLine from '../components/Timeline/index';
import Panel from '../components/Panel/index';
import '../assets/styles/pages/_inner.scss'
import Portfolio from '../components/Portfolio/index';
import MyAddress from '../components/Address/index';
import timelineEvents from '../modules/timeline';
import { Feedback } from '../components/Feedback/index';
import feedbackData from '../modules/feedbackData';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';


const InnerPage = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(true);
  
    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };
  
    return (
      <div className="inner-container">
        <Button 
                icon={faBars} 
                onClick={togglePanel}
                className={`hamburger ${isPanelOpen ? 'open' : 'closed'}`}
            />
        {isPanelOpen && (
        <aside className="left-panel">
            <Panel isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
        </aside>
        )}

        <div className="main-content">
          <div id="about">
            <About />
          </div>
          <div id="education">
            <TimeLine data={timelineEvents} />
          </div>
          <div id="expertise">
            <Expertise data={experiences} />
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

