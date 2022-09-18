import "./index.css";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const Contact = () => (
  <div className="contact-us">
    <ul className="ul-list">
      <li>
        <BsTelephoneFill className="contact-icon" />
      </li>
      <li>
        <IoLogoWhatsapp className="contact-icon" />
      </li>
      <li>
        <MdEmail className="contact-icon" />
      </li>
      <li>
        <TbWorld className="contact-icon" />
      </li>
    </ul>
  </div>
);
export default Contact;
