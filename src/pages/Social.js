import './../styles/styles.css'
import Image from 'react-bootstrap/Image';

const Social = () => {
    return (
        <div className="container">
        <div className='wrapper'>
            <div className="text-center about-text">
            <h2>Underground, unique, quirky, old school, cool and understated</h2>
                <div className="text-center">
                    <p>Quentin James and Dennis Hurley met in the Boston comedy scene in the late 2000s. 
                        They were part of the New England based sketch comedy troupe, Friends of Gertrude. 
                        Their work has been featured at the LA Comedy Festival at ImprovOlympic, Boston Comedy Festival, 
                        Philly Sketch Fest, NBC, Comedy Central, Inside Edition, CNN & MSNBC.
                    </p>
                </div>
                <Image className="gallery-image" src="./images/DennisAndQuentinLogo.jpg" fluid />
                < br/>
            </div>
        </div>
        </div>
          );
        };
  
  export default Social;