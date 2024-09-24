import "../styles/ContactComponent.css";
import { IoCall, IoLocation } from "react-icons/io5";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function ContactComponent() {
  return (
    <div className="contact-component">
      <div className="contact-box">
        <h4 className="number">
          <RiHomeOfficeFill className="icon" />
          Nairobi Office
        </h4>
        <p className="number">
          <IoCall className="icon" />
          1234567890
        </p>
        <p className="number">
          <MdEmail className="icon" />
          linexmugambi254@gmail.com
        </p>
        <p className="number">
          <IoLocation className="icon" />
          Block-45, Westlands  Nairobi Office

        </p>
      </div>
      <div className="contact-box">
        <h4>
          <RiHomeOfficeFill className="icon" />
          CBD Office
        </h4>
        <p className="number">
          <IoCall className="icon" />
          1234567890
        </p>
        <p className="number">
          <MdEmail className="icon" />
          linexmugambi254@gmail.com
        </p>
        <p>
          <IoLocation className="icon" />
          Block-45, Westlands  Nairobi Office
        </p>
      </div>
      <div className="contact-box">
        <h4>
          <RiHomeOfficeFill className="icon" />
          Lavington Office
        </h4>
        <p className="number">
          <IoCall className="icon" />
          1234567890
        </p>
        <p className="number">
          <MdEmail className="icon" />
        Linexmugambi254@gmail.com
        </p>
        <p>
          <IoLocation className="icon" />
          Block-45, Westlands  Nairobi Office
        </p>
      </div>
    </div>
  );
}
