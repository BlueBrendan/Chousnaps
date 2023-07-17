import { Navbar } from './Navbar';
import { ImageCollage } from 'src/components/ImageCarousel';

export const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="carousel-container">
              
                <ImageCollage/>
                <div className="carousel-text">
                    <h1 className="hero-text">BRENDAN CHOU</h1>
                    <p className="hero-text-description">Portrait, landscape, and street photographer in the San Francisco Bay Area</p>
                </div>
            </div>
          
        </div>
    )
}