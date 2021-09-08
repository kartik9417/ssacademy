import { Link } from "react-router-dom";
import '../css/ErrorPage.css';
const ErrorPage = () =>{
    return <>
    <div className='Error'>
        <h6>Error Page not Found</h6>
        <Link to='/'>Home Page</Link>
    </div>
    </>;
}
export default ErrorPage;