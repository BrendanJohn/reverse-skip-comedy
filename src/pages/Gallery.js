import Image from 'react-bootstrap/Image';

const Gallery = () => {
    return (
        <div className='wrapper'>
            <div className="text-center">
            <h3>Gallery</h3>
                <Image src="./images/reverseSkip.jpg" fluid />
            </div>
        </div>
          );
        };
  
  export default Gallery;