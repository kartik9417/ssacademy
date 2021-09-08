import CourseComponent from "./CourseComponent";
import Course from '../../Data/CourseData';
const Twelve = () =>{
    return(
        <>
        <CourseComponent heading='12th Class Medical' data={Course.twelve.med} heading1='subjects' heading2='class' heading3='stream'/>
        <CourseComponent heading='12th Class Non Medical' data={Course.twelve.nonMed} heading1='subjects' heading2='class' heading3='stream'/>
        <CourseComponent heading='12th Class Commerce' data={Course.twelve.commerce} heading1='subjects' heading2='class' heading3='stream'/>
        <CourseComponent heading='12th Class Arts' data={Course.twelve.arts} heading1='subjects' heading2='class' heading3='stream'/>
        </>
    );
}
export default Twelve;