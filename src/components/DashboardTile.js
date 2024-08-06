import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function DashboardTile(props) {
  const myStyle = {
    color: props.isProfit ? "green" : "red",
    float: "right",
    paddingTop: "15px",
  };
  return (
    <div className="tile col-sm-12 col-md-2 m-1">
      <div className="my-3">
        <i class={props.iconDescription}></i>
      </div>
      <h4>{props.description}</h4>
      <p>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
          {props.number}
        </span>
        <span style={myStyle}>{props.sales}</span>
      </p>
    </div>
  );
}

export function DashboardTile2(props) {
  return (
    <div className="tile col-sm-12 col-md-3 ms-3">
      <div className="row">
        <div className="col-6">
          <p className="my-3">Net profit</p>
          <h3 className="my-3">{props.netProfit}</h3>
          <p className="my-3" style={{ color: "green" }}>
            {props.sales}
          </p>
        </div>
        <div className="col-6">
          <CircularProgressbarWithChildren value={props.percentage}>
            <div>
              <h3 class="text-center pt-4">{props.percentage}%</h3>
              <p style={{fontSize:"10px"}}>Goal completed</p>
            </div>
          </CircularProgressbarWithChildren>
          <p style={{ fontSize: "8px", textAlign: "center" }}>
            * The values here has been rounded off
          </p>
        </div>
      </div>
    </div>
  );
}
