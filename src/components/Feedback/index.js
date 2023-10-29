import React from "react";
import Button from "../Button";
import Info from "../Info";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/components-scss/_feedback.scss'
import Box from "../../modules/BoxSection";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Feedback = ({ data }) => {
  return (
    <>
      <section id="feedback" className="feedback-section" data-testid="feedback-section">
        <Box title="Feedback"/>
        <div className="feedback-list">
          {data.map((item, index) => (
            <div className="feedback-item" key={index}>
              <Info text={item.feedback} />

              <div className="reporter">
                <img
                  src={item.reporter.photoUrl}
                  alt={item.reporter.name}
                  className="reporter-photo"
                />
                <div className="author-details">
                  <span className="author-name">
                    {item.reporter.name}
                  </span>
                  <a
                    href={item.reporter.citeUrl}
                    className="citeurl-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.reporter.citeUrl.replace(
                      /^(https?:\/\/)?(www\.)?/,
                      ""
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="main-container-button">
      <Button
        icon={ faChevronUp }
        text=""
        onClick={scrollToTop}
        className={`upp-button`}
        aria-label="scroll to top"
    />
      </div>
    </>
  );
};

export { Feedback };
