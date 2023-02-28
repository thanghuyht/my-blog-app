import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

interface Props {
  className?: string[];
  iconHoverEffect?: string[];
}
function IconsMenu({ className, iconHoverEffect }: Props) {
  let styleClass: string[];
  if (className) {
    styleClass = className.map((style) => style + " ");
  } else {
    styleClass = ["bg-transparent"];
  }
  let iconEffect: string[];
  if (iconHoverEffect) {
    iconEffect = iconHoverEffect.map((style) => style + " ");
  } else {
    iconEffect = ["bg-transparent"];
  }

  return (
    <ul className={styleClass.toString()}>
      <li className={iconEffect.toString()}>
        <a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer">
          <FaFacebook />
        </a>
      </li>
      <li className={iconEffect.toString()}>
        <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li className={iconEffect.toString()}>
        <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer">
          <AiFillInstagram />
        </a>
      </li>
      <li className={iconEffect.toString()}>
        <a href="https://www.youtube.com/" target={"_blank"} rel="noreferrer">
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
}

export { IconsMenu };
