import CourseComponent from "./CourseComponent";
import Course from '../../Data/CourseData';
const Bcom = () =>{
    return(
        <>
        <CourseComponent heading='B.com Semester 1' data={Course.bcom.sem1} heading1='subjects' heading2='stream' heading3='semester'/>
        <CourseComponent heading='B.com Semester 2' data={Course.bcom.sem2} heading1='subjects' heading2='stream' heading3='semester'/>
        <CourseComponent heading='B.com Semester 3' data={Course.bcom.sem3} heading1='subjects' heading2='stream' heading3='semester'/>
        <CourseComponent heading='B.com Semester 4' data={Course.bcom.sem4} heading1='subjects' heading2='stream' heading3='semester'/>
        <CourseComponent heading='B.com Semester 5' data={Course.bcom.sem5} heading1='subjects' heading2='stream' heading3='semester'/>
        <CourseComponent heading='B.com Semester 6' data={Course.bcom.sem6} heading1='subjects' heading2='stream' heading3='semester'/>
        </>
    );
}
export default Bcom;