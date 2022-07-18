const Edm1 = () => {
    return ( 
        <div className="schedule__stage schedule__stage--green">
            <h4 className="schedule__title">Rock Stage</h4>
            <div className="schedule__img">
                <picture>
                    <source media="(min-width: 600px)" srcset="img/icono_edm.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/icono_edm.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/icono_edm.jpg" lazyalt="icono_edm" width="500" height="300"/>
                </picture>
            </div>
            <ul className="schedule__list">
                <li className="schedule__item schedule__item--darkGreen">
                    24:00 | <span className="schedule__artist">Deadmau5</span>
                </li>
                <li className="schedule__item">
                    22:00 | <span className="schedule__artist">Tïesto</span>
                </li>
                <li className="schedule__item schedule__item--darkGreen">
                    20:00 | <span className="schedule__artist">Hardwell</span>
                </li>
                <li className="schedule__item">
                    19:00 | <span className="schedule__artist">Dash Berlin</span>
                </li>
                <li className="schedule__item schedule__item--darkGreen">
                    18:00 | <span className="schedule__artist">Fedde Legrand</span>
                </li>
                <li className="schedule__item">
                    17:00 | <span className="schedule__artist">Audien</span>
                </li>
            </ul>
        </div>        
     );
}
 
export default Edm1;