import taylor_full_body from 'src/images/portraits/taylor_full_body.jpg';
import ryan_full_body from 'src/images/portraits/ryan_prom_full_body.jpg';
import john_vertical from 'src/images/portraits/john_vertical.jpg'
import wagon_wheel from 'src/images/landscapes/wagon_wheel.jpg';
import alicia_hat_throw from 'src/images/portraits/alicia_hat_throw.jpg';
import matthew from 'src/images/portraits/matthew.jpg';
import florence_streets from 'src/images/street/florence_streets.jpg';
import standford_theater from 'src/images/street/stanford_theater.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageCarouselSmallScreen = () => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                stopOnHover={false}
                interval={6000}
                infiniteLoop={true}
                autoFocus={true}
                useKeyboardArrows={true}
            >
                <img src={taylor_full_body}/>
                <img src={ryan_full_body}/>
                <img src={john_vertical}/>
                <img src={alicia_hat_throw}/>
                <img src={matthew}/>
                <img src={florence_streets}/>
                <img src={wagon_wheel}/>
                <img src={standford_theater}/>
            </Carousel>
        </div>
    );
}
