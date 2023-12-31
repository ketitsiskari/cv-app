import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEducation } from '../../features/education/educationSlice';
import '../../assets/styles/components-scss/_timeLine.scss';
import Box from '../../modules/BoxSection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";


const TimeLine = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.educations.data);
  const status = useSelector((state) => state.educations.status);
  const displayData = Array.isArray(data.educations) ? data.educations : [];

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);

  return (
    <section className="timeline-container">
      <Box title="Education" />

      {status === "loading" && (
        <div className="loading-overlay">
          <FontAwesomeIcon
            className="loading-overlay__icon"
            icon={faSyncAlt}
            spin
          />
        </div>
      )}

      {status === "failed" && (
        <p>Something went wrong; please review your server connection!</p>
      )}

      {status !== "loading" && (
        <div className="timeline-list" role="list">
          {displayData.length === 0 && status === "success" ? (
            <p>No education data available.</p>
          ) : (
            displayData.map((item, index) => (
              <div key={item.id || index} className="timeline-item" role="listitem">
                <time className="timeline-year" dateTime={item.date.toString()}>
                  {item.date}
                </time>
                <div className="timeline-content">
                  <div className="timeline-content-info">
                    <h3>{item.title}</h3>
                    {item.subTitle && <h4>{item.subTitle}</h4>}
                    <p>{item.text || item.description}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default TimeLine;