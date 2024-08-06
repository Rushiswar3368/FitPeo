import { useEffect } from "react";

export default function CommentsRow(props){
    useEffect(()=>{
        let star = "";
        for(let i=0;i<props.obj.rating;i++)
        {
            star = star + `<i class="fa-solid fa-star text-warning"></i>`
        }
        for(let i=props.obj.rating;i<5;i++)
        {
                star = star + `<i class="fa-solid fa-star text-light"></i>`
        }
        document.getElementById(props.obj.idNo).innerHTML = star;
    },[props.obj.rating, props.obj.idNo]);

    return(
        <div class="mx-2">
            <img alt="img" src={props.obj.imageUrl} style={{height:"40px", width:"40px", borderRadius:"50%",padding:"0px"}} />
            <span style={{padding:"20px",fontWeight:"bold"}}>{props.obj.name}</span>
            <p className="my-3" id={`${props.obj.idNo}`}></p>
            <p style={{fontSize:"12px",marginTop:"10px"}}>{props.obj.feedback}</p>
            <hr />
        </div>
    )
}