import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import card3Image from '../../assets/images/card_3.png';
import card1Image from '../../assets/images/card_1.png';
import PortfolioInfo from './info';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('*');
    const portfolioRef = useRef(null);

    useEffect(() => {
        const iso = new Isotope(portfolioRef.current, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
            filter: activeFilter
        });

        const imgLoad = imagesLoaded(portfolioRef.current);
        imgLoad.on('progress', () => {
            iso.layout();
        });

        return () => {
            iso.destroy();
        };
    }, [activeFilter]);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const portfolioItems = [
        {
            id: 1,
            category: 'ui',
            imageUrl: card1Image,
            title: "Some text",
            description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            url: "https://example.com/ui1"
        },
        {
            id: 2,
            category: 'ui',
            imageUrl: card1Image,
            title: "Some text",
            description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            url: "https://example.com/ui1"
        },
        {
            id: 3,
            category: 'code',
            imageUrl: card3Image,
            title: "Some text",
            description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            url: "https://example.com/mixed1"
        },
        {
            id: 4,
            category: 'code',
            imageUrl: card3Image,
            title: "Some text",
            description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            url: "https://example.com/another-ui2"
        },
    ];

    return (
        <div className="portfolio-container">
            <div className="portfolio-filters">
                <button className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterChange('*')}>All</button>
                <button className={activeFilter === '.ui' ? 'active' : ''} onClick={() => handleFilterChange('.ui')}>UI</button>
                <button className={activeFilter === '.code' ? 'active' : ''} onClick={() => handleFilterChange('.code')}>Code</button>
            </div>
            <div className="portfolio-grid" ref={portfolioRef}>
                {portfolioItems.map(item => (
                    <div key={item.id} className={`portfolio-item ${item.category}`}>
                        <img src={item.imageUrl} alt={item.title} className="portfolio-image"/>
                        <PortfolioInfo title={item.title} description={item.description} url={item.url} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
