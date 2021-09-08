import '../css/Hbanner.css';
import {Link} from 'react-router-dom';
const Hbanner = (props) =>{
    return(
        <>
        <div className='banner_content'>
            <h1 className='banner_i welcome' style={{marginTop: props.margin}}>{props.heading}</h1>
            <h2 className='banner_i tagline'>{props.tagline}</h2>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F3F3" fillOpacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            {props.cButton && <Link to='/courses' className="banner_i button" style={{textDecoration:'none'}}>View Courses</Link>}
        </div>
        </>
    );
}
export default Hbanner;