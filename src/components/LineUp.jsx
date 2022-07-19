import Edm1 from "./lineUp/Edm1";
import Rock1 from "./lineUp/Rock1";
import Edm2 from "./lineUp/Edm2";
import Rock2 from "./lineUp/Rock2";
const LineUp = () => {
    return (  
        <main className="lineup" id="lineup">
            <div className="lineup__details lineup__container">
                <h2 className="lineup__heading">Line Up</h2>
                <div className="lineup__schedules">
                   <div className="schedule" >
                        <h3 className="schedule__heading">Friday 22</h3>
                        <div className="schedule__grid">
                            <Rock1 />
                            <Edm1 />
                        </div>
                        <h3 className="schedule__heading">Saturday 23</h3>
                        <div className="schedule__grid">
                            <Rock2 />
                            <Edm2 />
                        </div>
                   </div>
                </div>
            </div>
        </main>
    );
}
 
export default LineUp;