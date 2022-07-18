const Rock1 = () => {
    return ( 
        <div className="schedule__stage schedule__stage--yellow">
            <h4 className="schedule__title">Rock Stage</h4>
            <div className="schedule__img">
                <picture>
                    <source media="(min-width: 600px)" srcset="img/icono_rock.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/icono_rock.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/icono_rock.jpg" lazyalt="icono_rock" width="500" height="300"/>
                </picture>
            </div>
            <ul className="schedule__list">
                <li className="schedule__item schedule__item--darkYellow">
                    24:00 | <span className="schedule__artist">Metallica</span>
                </li>
                <li className="schedule__item">
                    22:00 | <span className="schedule__artist">Pearl Jam</span>
                </li>
                <li className="schedule__item schedule__item--darkYellow">
                    20:00 | <span className="schedule__artist">KoRn</span>
                </li>
                <li className="schedule__item">
                    19:00 | <span className="schedule__artist">Muse</span>
                </li>
                <li className="schedule__item schedule__item--darkYellow">
                    18:00 | <span className="schedule__artist">Breaking Benjamin</span>
                </li>
                <li className="schedule__item">
                    17:00 | <span className="schedule__artist">30 Seconds to Mars</span>
                </li>
            </ul>
        </div>
     );
}
 
export default Rock1;