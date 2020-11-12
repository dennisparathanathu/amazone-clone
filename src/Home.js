import React from 'react';
import "./Home.css";
import Product from "./Product";

function home() {
    return (
        <div className="Home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
  
             {/* product details*/}

        <div className="product_items">
            <Product
            id = "123"
            title="camera"
            price={11.90}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/41IUkLtS%2BZL.jpg"

            />
            <Product
            id = "12"
            title="Blue tooth speaker"
            price={234}
            rating={5}
            img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356535_sd.jpg"

            />
            </div>
            <div className="product_items">
            <Product
            id = "1235"
            title="Speaker"
            price={789}
            rating={5}
            img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6010/6010400_sd.jpg"

            />
            <Product
            id = "12"
            title="Watch"
            price={290}
            rating={5}
            img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1574443823-best-fitness-trackers-watches-for-women-letscom-1574443794.jpg"

            />
            <Product
            id = "123464"
            title="Mi A3"
            price={13500}
            rating={5}
            img="https://www.91-img.com/pictures/133432-v4-xiaomi-mi-a3-mobile-phone-large-1.jpg?tr=q-60"

            />
            


            </div>

        </div>
    )
}

export default home
