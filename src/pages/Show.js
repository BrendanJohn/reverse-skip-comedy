import Image from 'react-bootstrap/Image';
const Show = () => {
  return (
    <div className="container">
    <div className='wrapper'>
        <div className="text-center about-text">
        <div className="embed-responsive">
                    <div className="ratio ratio-16x9 img-fluid">
                    <iframe
                            src="https://player.vimeo.com/video/900399400"
                            title="YouTube video"
                            allowFullScreen> 
                        </iframe>
                    </div>
                </div>
        < br/>
        <p>"Kuru/Speak Like a Child" written by Jaco Pastorius & Herbie Hancock</p>
        </div>
    </div>
    </div>
      );
    };
  
  export default Show;