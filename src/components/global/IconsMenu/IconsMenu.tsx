import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function IconsMenu() {
    return (
        <div className="flex flex-row gap-3 items-center">
            <li className="hover:text-orange-500 hover:duration-150">
                <a href="https://www.facebook.com/" target={'_blank'} rel="noreferrer">
                    <FaFacebook />
                </a>
            </li>
            <li className="hover:text-orange-500 hover:duration-150">
                <a href="https://twitter.com/" target={'_blank'} rel="noreferrer">
                    <FaTwitter />
                </a>
            </li>
            <li className="hover:text-orange-500 hover:duration-150">
                <a href="https://www.instagram.com/" target={'_blank'} rel="noreferrer">
                    <AiFillInstagram />
                </a>
            </li>
            <li className="hover:text-orange-500 hover:duration-150">
                <a href="https://www.youtube.com/" target={'_blank'} rel="noreferrer">
                    <FaYoutube />
                </a>
            </li>
        </div>
    );
}

export { IconsMenu };
