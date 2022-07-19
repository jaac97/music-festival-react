import { useState } from "react"
import Photo from "./Photo";

const Galery = () => {
    const [photo, setPhoto] = useState(false);
    const [url, setUrl] = useState('')
    const showPhoto = e => {
        setPhoto(true)
        const photo = e.target.src.split("thumb/")[1]
        setUrl(photo);
       
    /*     const img = <img src={url} width="300px" height="300px"/>
        document.getElementById('galery').append(img) */
    }
    return ( 
        <section className="galery galery__container" id="galery">
            <h2 className="galery__heading">Galery</h2>
            <div className="photos">
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/1.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/1.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/1.jpg" lazyalt="thumb/1"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/2.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/2.webp" type="image/webp"/>
                    <img
                    onClick={e => showPhoto(e)}
                     className="photos__img" loading="lazy" decoding="async" src="img/thumb/2.jpg" lazyalt="thumb/2"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/3.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/3.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/3.jpg" lazyalt="thumb/3"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/4.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/4.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/4.jpg" lazyalt="thumb/4"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/5.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/5.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/5.jpg" lazyalt="thumb/5"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/6.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/6.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/6.jpg" lazyalt="thumb/6"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/7.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/7.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/7.jpg" lazyalt="thumb/7"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/8.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/8.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/8.jpg" lazyalt="thumb/8"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/9.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/9.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/9.jpg" lazyalt="thumb/9"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/10.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/10.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/10.jpg" lazyalt="thumb/10"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/11.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/11.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/11.jpg" lazyalt="thumb/11"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/12.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/12.webp" type="image/webp"/>
                    <img 
                    onClick={e => showPhoto(e)}
                    className="photos__img" loading="lazy" decoding="async" src="img/thumb/12.jpg" lazyalt="thumb/12"/>
                </picture>
            </div>
            {photo && <Photo url={url} setPhoto={setPhoto}/>}
        </section>
     );
}
 
export default Galery;