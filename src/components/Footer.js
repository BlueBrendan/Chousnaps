import instagram_icon from 'src/images/Instagram_icon.png.webp'
import email_icon from 'src/images/email.png';
import youtube_icon from 'src/images/youtube.avif';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer">
            <Link to="https://www.instagram.com/chousnaps" target="_blank">
                <img className="icon-image" src={instagram_icon}/>
            </Link>
            <Link to="/contact">
                <img className="icon-image" src={email_icon}/>
            </Link>
        </div>
    )
}