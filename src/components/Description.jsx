const Description = () => {
    return ( 
        <div className="festival festival__container" >
            <div className="festival__image">
             <img src="img/imagen_vocalista.webp" alt="Vocalist image" />
             <picture>
                <source media="(min-width:650px)" srcset="img/imagen_vocalista.webp" />
                <source media="(min-width:465px)" srcset="img/imagen_vocalista.afiv" />
            </picture> 

            </div>
            <div className="festival__text">
                <h2 className="festival__heading">Rock & EDM Festival</h2>
                <p className="festival__subtitle">Julio 2022, Guadalajara, México</p>
                <p className="festival__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita nulla dignissimos repellendus corporis excepturi enim eum? Tenetur rerum excepturi natus dicta ullam sit, fuga asperiores maxime distinctio rem doloremque?</p>
            </div>
        </div>
     );
}
 
export default Description;