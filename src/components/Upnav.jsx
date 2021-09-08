import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import '../css/Upnav.css';
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
const Upnav = () =>{
    return(
        <>
        <div className="upnav">
        <div className="upnav_in">
            <div className="upnav_item" id="left_upnav">
                <span id="phone"><BiPhoneCall />+91 98723 xxxxx</span>
                <span id="mail"><FiMail />demo@gmail.com</span>
            </div>
            <div className="upnav_item" id="right_upnav">
                <ul type="none">
                    <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><AiFillFacebook /></a></li>
                    <li><a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><AiOutlineInstagram /></a></li>
                    <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><AiOutlineTwitter /></a></li>
                </ul>
            </div>
        </div>
        </div>
        </>
    );
}
export default Upnav;