const Rock2 = () => {
    return ( 
        <div className="schedule__stage schedule__stage--turquoise">
            <h4 className="schedule__title">Rock Stage</h4>
            <div className="schedule__stage--rock" >
            </div>
            <ul className="schedule__list">
                <li className="schedule__item schedule__item--darkTurquoise">
                    24:00 | <span className="schedule__artist">Red Hot Chili Peppers</span>
                </li>
                <li className="schedule__item">
                    22:00 | <span className="schedule__artist">The Killers</span>
                </li>
                <li className="schedule__item schedule__item--darkTurquoise">
                    20:00 | <span className="schedule__artist">Deftones</span>
                </li>
                <li className="schedule__item">
                    19:00 | <span className="schedule__artist">Limp Bizkit</span>
                </li>
                <li className="schedule__item schedule__item--darkTurquoise">
                    18:00 | <span className="schedule__artist">Papa Roach</span>
                </li>
                <li className="schedule__item">
                    17:00 | <span className="schedule__artist">Lamb of God</span>
                </li>
            </ul>
        </div>
     );
}
 
export default Rock2;