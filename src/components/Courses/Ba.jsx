import CourseComponent from "./CourseComponent";
import Course from '../../Data/CourseData';
const Ba = () =>{
    return(
        <>
        <CourseComponent heading='BA Course' data={Course.ba} heading1='subjects' heading2='stream' heading3='semester'/>
        </>
    );
}
export default Ba;