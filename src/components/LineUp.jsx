import Edm1 from "./lineUp/Edm1";
import Rock1 from "./lineUp/Rock1";

const LineUp = () => {
    return (  
        <main className="lineup" >
            <div className="lineup__details">
                <h2 className="lineup__heading">Line Up</h2>
                <div className="lineup__schedules">
                   <div className="schedule" >
                        <h3 className="schedule__heading">Friday 23</h3>
                        <div className="schedule__grid">
                            <Rock1 />
                            <Edm1 />
                        </div>
                   </div>
                </div>
            </div>
        </main>
    );
}
 
export default LineUp;