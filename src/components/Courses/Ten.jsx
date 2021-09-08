import CourseComponent from "./CourseComponent";
import Course from '../../Data/CourseData';
const Ten = () =>{
    return(
        <>
        <CourseComponent heading='10th Class Courses' data={Course.ten} heading1='subjects' heading2='class' heading3='board'/>
        </>
    );
}
export default Ten;