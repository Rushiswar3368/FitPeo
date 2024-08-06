import feedback from '../customerData/customerFeedback.json';
import CommentsRow from './CommentsRow';

export default function Comments(){
    const feedbackRow = () => {
        return feedback.map((val,ind)=>{
            return <CommentsRow obj={val} key={ind}/>
        })
    }
    return(
        <div class="col-sm-12 col-md-3 tile ms-3">
            <h4>Customer's Feedback</h4>
            <div style={{ maxHeight:"300px", overflowY: "auto" }}>
                {feedbackRow()}
            </div>
        </div>
    )
}