import CourseComponent from "./CourseComponent";
import Course from '../../Data/CourseData';
const Eleven = () =>{
    return(
        <>
        <CourseComponent heading='11th Class Medical' data={Course.eleven.med} heading1='subjects' heading2='class' heading3='stream'/>
        <CourseComponent heading='11th Class Non Medical' data={Course.eleven.nonMed} heading1='subjects' heading2='class' heading3='stream'/>
        <CourseComponent heading='11th Class Commerce' data={Course.eleven.commerce} heading1='subjects' heading2='class' heading3='stream'/>
        <CourseComponent heading='11th Class Arts' data={Course.eleven.arts} heading1='subjects' heading2='class' heading3='stream'/>
        </>
    );
}
export default Eleven;