const Galery = () => {
    return ( 
        <section className="galery galery__container" >
            <h2 className="galery__heading">Galery</h2>
            <div className="photos">
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/1.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/1.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/1.jpg" lazyalt="thumb/1"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/2.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/2.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/2.jpg" lazyalt="thumb/2"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/3.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/3.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/3.jpg" lazyalt="thumb/3"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/4.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/4.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/4.jpg" lazyalt="thumb/4"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/5.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/5.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/5.jpg" lazyalt="thumb/5"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/6.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/6.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/6.jpg" lazyalt="thumb/6"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/7.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/7.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/7.jpg" lazyalt="thumb/7"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/8.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/8.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/8.jpg" lazyalt="thumb/8"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/9.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/9.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/9.jpg" lazyalt="thumb/9"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/10.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/10.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/10.jpg" lazyalt="thumb/10"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/11.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/11.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/11.jpg" lazyalt="thumb/11"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/grande/12.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/grande/12.webp" type="image/webp"/>
                    <img className="photos__img" loading="lazy" decoding="async" src="img/grande/12.jpg" lazyalt="thumb/12"/>
                </picture>
            </div>
        </section>
     );
}
 
export default Galery;