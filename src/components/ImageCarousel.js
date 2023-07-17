import john_collage from 'src/images/portraits/john_collage.jpg';
import alicia_collage from 'src/images/portraits/alicia_collage.jpg';
import alicia_degree from 'src/images/portraits/alicia_degree.jpg';
import image_5 from 'src/images/portraits/yuichi_bridge.jpg';
import image_2 from 'src/images/portraits/taylor_collage.jpg';
import image_6 from 'src/images/portraits/ryan_collage.jpg';
import golden_gate_bridge from 'src/images/landscapes/golden_gate_bridge.jpg';
import shark_fin_cove from 'src/images/landscapes/shark_fin_cove.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageCollage = () => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                stopOnHover={false}
                interval={6000}
                infiniteLoop={true}
            >
                <img src={john_collage}/>
                
                <img src={alicia_collage}/>
                <img src={alicia_degree}/>
                <img src={image_5}/>
                <img src={image_2}/>
                <img src={image_6}/>
                <img src={golden_gate_bridge}/>
                <img src={shark_fin_cove}/>
            </Carousel>
        </div>
    );
}
