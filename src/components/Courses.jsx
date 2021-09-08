import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Switch,Route} from 'react-router-dom';
import Allcourses from './Allcourses';
import Nine from './Courses/Nine';
import Ten from './Courses/Ten';
import Eleven from './Courses/Eleven';
import Twelve from './Courses/Twelve';
import Bcom from './Courses/Bcom';
import Ba from './Courses/Ba';
import Hbanner from "./Hbanner";
import ErrorPage from "./ErrorPage";
const Courses = () =>{
    const location =  useLocation();
    const [tagline, setTag]= useState('All Courses');
    useEffect(()=>{
        if(location.pathname.startsWith('9th',9)){
            setTag('9th Class');
        }
        else if(location.pathname.startsWith('10th',9)){
            setTag('10th Class');
        }
        else if(location.pathname.startsWith('11th',9)){
            setTag('11th Class');
        }
        else if(location.pathname.startsWith('12th',9)){
            setTag('12th Class');
        }
        else if(location.pathname.startsWith('bcom',9)){
            setTag('B.com Courses');
        }
        else if(location.pathname.startsWith('ba',9)){
            setTag('BA Courses');
        }
        else if(location.pathname.startsWith('',9)){
            setTag('All Courses');
        }
    },[location.pathname]);
    return(
        <>
        <Hbanner heading='Courses' tagline={tagline} cButton={false} margin='-50px'/>
        <Switch>
        <Route exact path='/courses' component={Allcourses}/>
        <Route exact path='/courses/9th' component={Nine}/>
        <Route exact path='/courses/10th' component={Ten}/>
        <Route exact path='/courses/11th' component={Eleven}/>
        <Route exact path='/courses/12th' component={Twelve}/>
        <Route exact path='/courses/bcom' component={Bcom}/>
        <Route exact path='/courses/ba' component={Ba}/>
        <Route component={ErrorPage}></Route>
        </Switch>
        </>
    );
}
export default Courses;