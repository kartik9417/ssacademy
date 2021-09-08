import '../css/Results.css';
import ResultData from "../Data/ResultData";
import Result from './Result';
const Results = () =>{
    return (
        <>
        <h3 className="r_heading">Congratulations To Our Toppers 2021</h3>
        <div className='r_cards'>
        {ResultData.map((value,index)=>{
            return <Result key={value.id} img={value.img} name={value.name} board={value.board} class={value.class} index={index}/>;
        })}
        </div>
        </>
    );
}
export default Results;