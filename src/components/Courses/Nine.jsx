import CourseComponent from "./CourseComponent";
import Course from '../../Data/CourseData';
const Nine = () =>{
    return(
        <>
        <CourseComponent heading='9th Class Courses' data={Course.nine} heading1='subjects' heading2='class' heading3='board'/>
        </>
    );
}
export default Nine;