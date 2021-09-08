import '../../css/CourseCard.css';
const CourseCard = (props) =>{
    return(
        <>
            <div className='course_card_container'>
            <div className='course_card'>
                <div className='course_no' style={{backgroundColor: props.bgColor}}>{props.courseNo}</div>
                <div className='course_detail'>
                    <div>
                        <p>{props.heading1}: <span>{props.heading1_V}</span></p>
                        <p>{props.heading2}: <span>{props.heading2_V}</span></p>
                        <p>{props.heading3}: <span>{props.heading3_V}</span></p>
                    </div>
                </div>
                <div className='course_fees'>
                    <p>Join us for</p>
                    <span>₹{props.courseFees}</span>
                </div>
            </div>
            </div>
        </>
    );
}
export default CourseCard;