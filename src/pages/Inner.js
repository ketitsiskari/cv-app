import React, { useState } from 'react';
import About from '../components/Box/index';
import Expertise from '../components/Expertise/index';
import experiences from '../modules/Expertise';
import TimeLine from '../components/Timeline';
import Panel from '../components/Panel';
import '../assets/styles/pages/_inner.scss'
import Portfolio from '../components/Portfolio';
import MyAddress from '../components/Address';
import timelineEvents from '../modules/timeline';
import { Feedback } from '../components/Feedback';
import feedbackData from '../modules/feedbackData';

const InnerPage = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(true);
  
    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };
  
    return (
      <div className="inner-container">
        <button className={`hamburger ${isPanelOpen ? 'open' : 'closed'}`} onClick={togglePanel}>
            <span></span>
            <span></span>
            <span></span>
        </button>
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

