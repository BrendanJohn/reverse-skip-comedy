import './../styles/styles.css'
import Image from 'react-bootstrap/Image';

const About = () => {
    return (
        <div className='wrapper'>
            <div className="text-center about-text">
            <h3>About</h3>
            <p>Underground, unique, quirky, old school, cool and understated.</p>
                <div className="text-center">
                    <p>Placeholder text text text text text text.
                    Placeholder text text text text text text.
                    Placeholder text text text text text text.
                    </p>
                    <p>Placeholder text text text text text text.</p>
                    <p>Placeholder text text text text text text.</p>
                </div>
                <Image className="gallery-image" src="./images/DennisAndQuentinLogo.jpg" fluid />
                < br/>
            </div>
        </div>
          );
        };
  
  export default About;