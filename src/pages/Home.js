const Home = () => {
    return (
    <div className='wrapper'>
        <div className="text-center">
        <h3>Reverse, Skip Comedy</h3>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe 
                class="embed-responsive-item"
                width='900' 
                height='500 ' 
                src="https://www.youtube.com/embed/xvFZjo5PgG0" 
                title="Rick Roll (Different link + no ads)" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
        </div>
    </div>
      );
    };
  export default Home;