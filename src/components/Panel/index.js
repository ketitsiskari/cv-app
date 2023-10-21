import { useNavigate } from 'react-router-dom';
import '../../assets/styles/layout/_panel.scss';
import PhotoBox from '../PhotoBox';
import Navigation from '../Navigation/index';
import Button from '../Button/index';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/images/avatar.png';

const Panel = (props) => {
    const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate('/');
  };

    return (
        <aside className={`panel ${props.isPanelOpen ? 'open' : 'closed'}`}>
            <div className="hamburger" onClick={props.togglePanel}>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <PhotoBox 
                name="Ketevan Tsiskaridze"
                avatar={avatar}
                viewType={2} 
            />
            <Navigation />
            <Button icon={faChevronLeft} text="Go back" onClick={handleGoBackClick} />
        </aside>
    );
};

export default Panel;

