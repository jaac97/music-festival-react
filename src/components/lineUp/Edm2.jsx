const Edm2 = () => {
    return ( 
        <div className="schedule__stage schedule__stage--yellow">
            <h4 className="schedule__title">EDM Stage</h4>
            <div className="schedule__stage--edm">
            </div>
            <ul className="schedule__list">
                <li className="schedule__item schedule__item--darkYellow">
                    24:00 | <span className="schedule__artist">Paul Van Dyk</span>
                </li>
                <li className="schedule__item">
                    22:00 | <span className="schedule__artist">Armin Van Buuren</span>
                </li>
                <li className="schedule__item schedule__item--darkYellow">
                    20:00 | <span className="schedule__artist">Above & Beyond</span>
                </li>
                <li className="schedule__item">
                    19:00 | <span className="schedule__artist">Eric Prdyz</span>
                </li>
                <li className="schedule__item schedule__item--darkYellow">
                    18:00 | <span className="schedule__artist">Ferry Corsten</span>
                </li>
                <li className="schedule__item">
                    17:00 | <span className="schedule__artist">Vini Vici</span>
                </li>
            </ul>
        </div>        
     );
}
 
export default Edm2;