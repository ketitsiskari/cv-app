import React from 'react';

const PortfolioInfo = ({ title, description, url }) => {
    return (
        <div className="portfolio-description">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                View Source
            </a>
        </div>
    );
};

export default PortfolioInfo;
