const Photo = (props) => {
    const url = `img/grande/${props.url}`;
    const closed = e => {
        console.log(e.target)
        if(!e.target.classList.contains('photo__big')){
            props.setPhoto(false)
        }
    }
    return ( <>
        <div onClick={e => closed(e)} className="photo">
             <img className="photo__big" src={url}/>
             <button className="photo__button" value="X">X</button>
        </div>
    </> );
}
 
export default Photo;