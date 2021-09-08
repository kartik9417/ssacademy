import { AiFillHome,AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import '../css/Footer.css';
const Footer = () => {
    return (
        <>
        <footer>
            <div className='address footer_i'>
                <h6>Contact Us</h6>
                <p><span><AiFillHome /></span>S.S. Accademy, Kalyari more, Pathankot - Sujanpur Link Rd, near Citizen gas agency, Punjab 145023</p>
            <p><span><AiFillPhone /></span>98723 xxxxx,94178 xxxxx</p>
            <p><span><GrMail /></span>demo@gmail.com</p>
            </div>
            <div className='timing footer_i'>
            <h6>Opening hours</h6>
            <p>Mon - Sat : <span>8:00 AM - 6:00 PM</span></p>
            <p>Sunday: <span>Closed</span></p>
            </div>
            <div className='location footer_i'>
            <h6>Location</h6>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.145843254019!2d75.6067124501324!3d32.3079353149702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c79285db5fa63%3A0x15b8f294e4443d40!2sSS%20Commerce%20Tution%20and%20Coaching%20Classes!5e0!3m2!1sen!2sin!4v1628316892473!5m2!1sen!2sin" width="100%" height="100%" style={{border:0,}} allowFullScreen="" loading="lazy" title='map'></iframe></div>
        </footer>
        </>
    )
}
export default Footer;