import Image from 'react-bootstrap/Image';
import './../styles/styles.css'

const Gallery = () => {
    return (
        <div className='wrapper'>
            <div className="text-center">
                <Image className="gallery-image" src="./images/gallery/DennisMirror.jpeg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/fence.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/dennisQuentinBricks.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/cards.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/market.jpg" fluid />
                < br/>
                <Image className="gallery-image" src="./images/gallery/outside.jpg" fluid />
                < br/>
            </div>
        </div>
          );
        };
  
  export default Gallery;