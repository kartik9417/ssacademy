import '../css/ErrorPage.css';
import { Link } from 'react-router-dom';
const Progress = () =>{
    return <>
    <div className='Error'>
        <h6>Page Still in Production</h6>
        <Link to='/'>Home Page</Link>
    </div>
    </>;
}
export default Progress;