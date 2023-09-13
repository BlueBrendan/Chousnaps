import john_collage from 'src/images/portraits/collages/john_collage.jpg';
import alicia_collage from 'src/images/portraits/collages/alicia_collage.jpg';
import alicia_degree from 'src/images/portraits/alicia_degree.jpg';
import yuichi_bridge from 'src/images/portraits/yuichi_bridge.jpg';
import taylor_collage from 'src/images/portraits/collages/taylor_collage.jpg';
import ryan_collage from 'src/images/portraits/collages/ryan_collage.jpg';
import matthew_collage from 'src/images/portraits/collages/matthew_collage.jpg';
import golden_gate_bridge from 'src/images/landscapes/golden_gate_bridge.jpg';
import shark_fin_cove from 'src/images/landscapes/shark_fin_cove.jpg';
import ponte_santangelo from 'src/images/landscapes/ponte_santangelo.jpg';
import las_vegas from 'src/images/landscapes/las_vegas.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageCarousel = () => {
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
                <img src={golden_gate_bridge}/>
                <img src={taylor_collage}/>
                <img src={ryan_collage}/>
                <img src={shark_fin_cove}/>
                <img src={las_vegas}/>
                <img src={alicia_collage}/>
                <img src={alicia_degree}/>
                <img src={john_collage}/>
                <img src={yuichi_bridge}/>
                <img src={matthew_collage}/>
                <img src={ponte_santangelo}/>
                
            </Carousel>
        </div>
    );
}
