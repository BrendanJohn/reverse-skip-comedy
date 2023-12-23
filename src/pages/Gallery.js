import Image from 'react-bootstrap/Image';
import './../styles/styles.css'

const Gallery = () => {
    return (
        <div className='wrapper'>
            <div className="text-center">
                <Image className="gallery-image" src="./images/gallery/8M1A8016.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/8M1A8022.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/8M1A8108.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/8M1A8179.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/8M1A8224.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/8M1A8229.jpg" fluid />
                < br/>
            </div>
        </div>
          );
        };
  
  export default Gallery;