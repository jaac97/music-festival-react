const Galery = () => {
    return ( 
        <section className="galery" >
            <h2 className="galery__heading">Galery</h2>
            <div className="photos">
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/1.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/1.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/1.jpg" lazyalt="thumb/1"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/2.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/2.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/2.jpg" lazyalt="thumb/2"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/3.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/3.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/3.jpg" lazyalt="thumb/3"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/4.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/4.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/4.jpg" lazyalt="thumb/4"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/5.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/5.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/5.jpg" lazyalt="thumb/5"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/6.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/6.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/6.jpg" lazyalt="thumb/6"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/7.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/7.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/7.jpg" lazyalt="thumb/7"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/8.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/8.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/8.jpg" lazyalt="thumb/8"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/9.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/9.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/9.jpg" lazyalt="thumb/9"/>
                </picture>
                <picture>
                    <source media="(min-width: 600px)" srcset="img/thumb/10.avif" type="image/avif"/>
                    <source media="(min-width: 600px)" srcset="img/thumb/10.webp" type="image/webp"/>
                    <img loading="lazy" decoding="async" src="build/img/thumb/10.jpg" lazyalt="thumb/10"/>
                </picture>
            </div>
        </section>
     );
}
 
export default Galery;