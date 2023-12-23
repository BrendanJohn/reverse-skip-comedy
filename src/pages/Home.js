const Home = () => {
    return (
        <div className="container">
    <div className='wrapper'>
        <div className="text-center">
        <img id="main-logo"  src="./images/full-logo-tagline.png" alt="main logo"></img>
        <div className="embed-responsive">
                <div className="ratio ratio-16x9 img-fluid">
                    <iframe
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        title="YouTube video"
                        allowFullScreen> 
                    </iframe>
                </div>
            </div>
            </div>
    </div>
    </div>
      );
    };
  export default Home;