const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__overlay">
                <div className="hero__content hero__container">
                    <h1 className="hero__heading">Rock & EDM Festival</h1>
                    <p className="hero__subtitle">
                        Julio 2022, Guadalajara, México. 
                    </p>
                </div>
            </div>
            <video className="videos" mute loop autoPlay>
                <source src="video/concierto.mp4" type="video/mp4" />
                <source src="video/concierto.ogg" type="video/ogg" />
                <source src="video/concierto.webm" type="video/webm" />
            </video>
        </div>
    );
}
 
export default Hero;