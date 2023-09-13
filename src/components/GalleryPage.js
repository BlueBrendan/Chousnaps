import { Navbar } from './Navbar';
import { useState } from "react";
import { Footer } from 'src/components/Footer';
import { Gallery } from 'src/components/Gallery'

// portraits
import alicia_degree from 'src/images/portraits/alicia_degree.jpg';
import yuichi_bridge from 'src/images/portraits/yuichi_bridge.jpg';
import matthew from 'src/images/portraits/matthew.jpg';
import taylor_full_body from 'src/images/portraits/taylor_full_body.jpg';
import taylor_bench from 'src/images/portraits/taylor_bench.jpg';
import john_vertical from 'src/images/portraits/john_vertical.jpg';
import ryan_prom_full_body from 'src/images/portraits/ryan_prom_full_body.jpg';
import alicia_hat_throw from 'src/images/portraits/alicia_hat_throw.jpg';

// landscape
import golden_gate_bridge from 'src/images/landscapes/golden_gate_bridge.jpg';
import shark_fin_cove from 'src/images/landscapes/shark_fin_cove.jpg';
import ponte_santangelo from 'src/images/landscapes/ponte_santangelo.jpg';
import las_vegas from 'src/images/landscapes/las_vegas.jpg';
import milan_duomo from 'src/images/landscapes/milan_duomo.jpg';
import bike from 'src/images/landscapes/bike.jpg'
import cave from 'src/images/landscapes/cave.jpg';
import venice from 'src/images/landscapes/venice.jpg';
import wagon_wheel from 'src/images/landscapes/wagon_wheel.jpg';
import intuit_bike from 'src/images/landscapes/intuit_bike.jpg'
import intuit_building_6 from 'src/images/landscapes/intuit_building_6.jpg';

// street
import italian_man from 'src/images/street/italian_man.jpg';
import roman_man from 'src/images/street/roman_man.jpg';
import san_francisco_chinatown from 'src/images/street/san_francisco_chinatown.jpg';
import san_francisco_couple from 'src/images/street/san_francisco_couple.jpg';
import university_avenue from 'src/images/street/university_avenue.jpg';
import standford_theater from 'src/images/street/stanford_theater.jpg';
import florence_streets from 'src/images/street/florence_streets.jpg';
import downtown_oakland from 'src/images/street/downtown_oakland.jpg';

export const GalleryPage = (props) => {
    const { largeScreen } = props;
    const [portraitPhotosIndex, setPortraitPhotosIndex] = useState(-1);
    const [landscapePhotosIndex, setLandscapePhotosIndex] = useState(-1);
    const [streetPhotosIndex, setStreetPhotosIndex] = useState(-1);

    const portraitPhotos = [
        {src: alicia_degree, width: 2500, height: 1667},
        {src: john_vertical, width: 1667, height: 2500},
        {src: ryan_prom_full_body, width: 1667, height: 2500},
        {src: intuit_building_6, width: 2500, height: 1667},
        {src: yuichi_bridge, width: 2500, height: 1667},
        {src: taylor_full_body, width: 1667, height: 2500},
        {src: alicia_hat_throw, width: 1667, height: 2500},
        {src: taylor_bench, width: 1667, height: 2500},
        {src: matthew, width: 1667, height: 2500},
    ];

    const landscapePhotos = [
        {src: golden_gate_bridge, width: 2500, height: 1667},
        {src: shark_fin_cove, width: 2500, height: 1667},
        {src: ponte_santangelo, width: 2500, height: 1667},
        {src: milan_duomo, width: 2500, height: 1667},
        {src: wagon_wheel, width: 1667, height: 2500},
        {src: las_vegas, width: 2500, height: 1667},
        {src: venice, width: 2500, height: 1667},
        {src: bike, width: 1667, height: 2500},
        {src: intuit_bike, width: 2500, height: 1667},
        {src: cave, width: 2500, height: 1667},
    ]

    const streetPhotos = [
        {src: italian_man, width: 1667, height: 2500},
        {src: san_francisco_chinatown, width: 1667, height: 2500},
        {src: roman_man, width: 1667, height: 2500},
        {src: san_francisco_couple, width: 1667, height: 2500},
        {src: university_avenue, width: 1667, height: 2500},
        {src: standford_theater, width: 1667, height: 2500},
        {src: florence_streets, width: 1667, height: 2500},
        {src: downtown_oakland, width: 1667, height: 2500},
    ]

    return (
        <div class='page-container'>
            <Navbar/>
            <div className="gallery-container">
                <Gallery
                    title='Portraits'
                    photos={portraitPhotos}
                    photosIndex={portraitPhotosIndex}
                    setIndex={setPortraitPhotosIndex}
                    containerWidth={600}
                    largeScreen={largeScreen}
                />
                <Gallery
                    title='Architecture and Landscape'
                    photos={landscapePhotos}
                    photosIndex={landscapePhotosIndex}
                    setIndex={setLandscapePhotosIndex}
                    containerWidth={500}
                    largeScreen={largeScreen}
                />
                <Gallery
                    title='Street'
                    photos={streetPhotos}
                    photosIndex={streetPhotosIndex}
                    setIndex={setStreetPhotosIndex}
                    containerWidth={600}
                    largeScreen={largeScreen}
                />
            </div>
            <Footer/>
        </div>
    )
}