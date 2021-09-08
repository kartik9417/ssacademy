import CourseCard from "./CourseCard";
import '../../css/CourseComponent.css';
import { useState } from "react";
const CourseComponent = (props) =>{
    const cData=props.data;
    console.log(cData);
    const [expand,setExpand]=useState(false);
    const toggleExpand = () =>{
        setExpand(!expand);
    }
    return(
        <>
            <h3 className='nine_heading'>{props.heading}</h3>
            {expand?cData.map((value,index)=>{
                return(<CourseCard key={value.id} courseNo={value.id} heading1_V={value[props.heading1]} heading2_V={value[props.heading2]} heading3_V={value[props.heading3]} heading1={props.heading1} heading2={props.heading2} heading3={props.heading3} courseFees={value.price}
                bgColor={value.bgcolor}/>);
            }):cData.filter((value,index)=>index===0).map((value,index)=>{
                return(<CourseCard key={value.id} courseNo={value.id} heading1_V={value[props.heading1]} heading2_V={value[props.heading2]} heading3_V={value[props.heading3]} heading1={props.heading1} heading2={props.heading2} heading3={props.heading3} courseFees={value.price}
                    bgColor={value.bgcolor}/>);
            })}
        <div className='expand'>
            <button onClick={toggleExpand}>{expand?'Show less':'Show more'}</button>
        </div>
        </>
    );
}
export default CourseComponent;