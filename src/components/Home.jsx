import Hbanner from "./Hbanner";
import '../css/Home.css';
import { ImQuotesLeft,ImQuotesRight } from 'react-icons/im';
import Results from "./Results";
const Home = () =>{
    return(
        <>
        <Hbanner heading='S.S Academy Welcomes You' tagline='A Secret of Success' cButton={true}/>
        <div className='welcome_ss'>
            <div className='welcome_left wel_item'>
        <h3 >About S.S. Academy</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        <p>Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        </div>
        <div className='welcome_img wel_item'>
        </div>
        </div>
        <div className='owner_s'>
        <div className='owner_ss'>
            <div className='owner_left owner_item'>
        <h3 >Owner's Message</h3>
        <p><ImQuotesLeft style={{transform:'scale(1.1)',margin:'0px 4px 4px 0px'}}/>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        <p>Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.<ImQuotesRight style={{transform:'scale(1.1)',margin:'0px 0px 4px 4px'}}/></p>
        </div>
        <div className='owner_img owner_item'>
        </div>
        </div>
        </div>
        <Results />
        </>
    );
}
export default Home;