import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/components-scss/_timeLine.scss';
import Box from '../../modules/BoxSection';

const TimeLine = ({ data = [] }) => {
  if (!data.length) {
    return <p>No timeline data available.</p>;
  }

  return (
    <section className="timeline-container">
      <Box title="Education"/>
      <div className="timeline-list" role="list">
        {data.map((item, index) => (
          <div key={item.id || index} className="timeline-item" role="listitem">
            <time className="timeline-year" dateTime={item.date.toString()}>{item.date}</time>
            <div className="timeline-content">
              <div className="timeline-content-info">
                <h3>{item.title}</h3>
                {item.subTitle && <h4>{item.subTitle}</h4>}
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

TimeLine.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      text: PropTypes.string.isRequired
    })
  )
};

export default TimeLine;
