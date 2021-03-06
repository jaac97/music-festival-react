const Edm1 = () => {
    return ( 
        <div className="schedule__stage schedule__stage--turquoise">
            <h4 className="schedule__title">EDM Stage</h4>
            <div className="schedule__stage--edm">
            </div>
            <ul className="schedule__list">
                <li className="schedule__item schedule__item--darkTurquoise">
                    24:00 | <span className="schedule__artist">Deadmau5</span>
                </li>
                <li className="schedule__item">
                    22:00 | <span className="schedule__artist">Tïesto</span>
                </li>
                <li className="schedule__item schedule__item--darkTurquoise">
                    20:00 | <span className="schedule__artist">Hardwell</span>
                </li>
                <li className="schedule__item">
                    19:00 | <span className="schedule__artist">Dash Berlin</span>
                </li>
                <li className="schedule__item schedule__item--darkTurquoise">
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