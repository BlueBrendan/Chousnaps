import { Navbar } from './Navbar';
import profileImage from '../images/brendan_profile_image.jpg';

export const AboutPage = () => {
    return (
        <div>
            <Navbar/>
            <img className="profile-image" src={profileImage}></img>
        </div>
        
    )
}