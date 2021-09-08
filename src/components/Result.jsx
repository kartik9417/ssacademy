import ResultData from "../Data/ResultData";
const Result = (props) =>{
    let marks= {sub:[],marks:[]};
    const result= [];
    for(let i in ResultData){
        for(let props in ResultData[i].marks){
            marks.sub.push(props); 
            marks.marks.push(ResultData[i].marks[props]);
        };
        result.push(marks);
        marks= {sub:[],marks:[]};
};
    return (
        <>
        <div className='r_card'>
            <div className='r_card_i r_card_img' style={{background:`url(${props.img}) no-repeat center top/cover`}}>
            </div>
            <div className='r_card_i r_card_detail'>
                <div className='marks'>
                    {result[props.index].marks.map((value,index)=>{
                        return (value?<p key={index}>{`${result[0].sub[index]}: `}<span>{`${value}/100`}</span></p>:null);
                    })}
                </div>
                <div className='s_info'>
                <p className='name'>{props.name}</p>
                <p className='designation'>{`${props.class} , ${props.board}`}</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Result;