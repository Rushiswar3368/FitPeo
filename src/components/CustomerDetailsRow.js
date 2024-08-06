export default function CustomerDetailsRow(props){

    return (
        <tr>
            <td class="px-4 py-2">
                <img style={{height:"30px", width:"30px", borderRadius:"50%",padding:"0px"}} src={props.obj.imageUrl} alt="logo" />
                <span class="bg-transparent text-light ps-3">{props.obj.name}</span>
            </td>
            <td>{props.obj.orderNo}</td>
            <td>{props.obj.amount}</td>
            <td><span style={{backgroundColor: props.obj.status==="Delivered" ? "green": "red", color: props.obj.status==="Delivered" ? "white": "black"}} class="p-0 px-2 rounded-pill">{props.obj.status}</span></td>
        </tr>
    )
}