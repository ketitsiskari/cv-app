import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/layout/_navigation.scss';
import navItems from '../../modules/naviagtionData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import scrollToElement from '../../modules/scroll';

const Navigation = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeItem, setActiveItem] = useState(navItems[0].id);
    const sectionRefs = useRef({});

    const determineActiveSection = () => {
        let currentActiveId = navItems[0].id;
        for (const item of navItems) {
            const sectionEl = sectionRefs.current[item.id];
            if (sectionEl) {
                const rect = sectionEl.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentActiveId = item.id;
                    break;
                }
            }
        }
        setActiveItem(currentActiveId);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        navItems.forEach(item => {
            sectionRefs.current[item.id] = document.getElementById(item.id);
        });

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', determineActiveSection);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', determineActiveSection);
        };
    }, []);

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        scrollToElement(itemId);
    };

    return (
        <div className="navigation" data-testid="navigation">
            {navItems.map((item) => (
                <div
                    key={item.id}
                    role="button"
                    aria-label={item.label}
                    className={`nav-item ${activeItem === item.id ? 'active' : ''}` }
                    data-testid={`nav-item-${item.label}`}
                    onClick={() => handleItemClick(item.id)}
                >
                    <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                    {windowWidth > 600 && <span className="nav-label">{item.label}</span>}
                </div>
            ))}
        </div>
    );
};

export default Navigation;
