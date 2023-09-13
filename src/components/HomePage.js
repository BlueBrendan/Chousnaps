import { Navbar } from './Navbar';
import { ImageCarousel } from 'src/components/ImageCarousel';
import { ImageCarouselSmallScreen } from 'src/components/ImageCarouselSmallScreen';
import brendan from 'src/images/brendan_profile_image.jpg';
import { FourStepProcess } from 'src/components/FourStepProcess';
import { Footer } from 'src/components/Footer';

export const HomePage = (prop) => {
    const { largeScreen } = prop;
    return (
        <div class='page-container'>
            <Navbar/>
            <div className="carousel-container">
                <div className="carousel-images">
                    {largeScreen ? <ImageCarousel/> : <ImageCarouselSmallScreen/>}
                </div>
                <div className="carousel-text">
                    <h1 className="hero-text">BRENDAN CHOU</h1>
                    <p className="hero-text-description">Portrait, landscape, and street photographer in the San Francisco Bay Area</p>
                </div>
            </div>
            <div className="page-section two-column-container">
                <img className="profile-image" src={brendan}/>
                <div>
                    <p className="page-text-description">Hi! I'm Brendan, a portrait, landscape, and street photographer located in the <b>San Francisco Bay Area!</b></p>
                    <p className="page-text-description">I work at an affordable rate for a broad range of applications, including studio and outdoor headshots, family gatherings, graduation ceremonies, and more.</p>
                </div>
            </div>
            <FourStepProcess largeScreen={largeScreen}/>
            <Footer/>
        </div>
    )
}