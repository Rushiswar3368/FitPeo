import users from "../customerData/customerDetails.json";
import CustomerDetailsRow from "./CustomerDetailsRow";

export default function RecentOrders() {
  const customerDetails = () => {
    return users.map((val, ind) => {
      return <CustomerDetailsRow obj={val} key={ind} />;
    });
  };
  return (
    <div class="col-sm-12 col-md-8 ms-2 mb-3 me-3 tile">
      <h2 style={{ marginLeft: "20px" }}>Recent Orders</h2>
      <div style={{ maxHeight:"300px", overflowY: "auto" }}>
        <table
          style={{ width: "90%", margin: "0px 2%" }}
          class="table table-bordered"
        >
          <tr>
            <th class="px-4 py-2 border-top-0">Customers</th>
            <th class="border-top-0">Order No</th>
            <th class="border-top-0">Amount</th>
            <th class="border-top-0">Status</th>
          </tr>
          {customerDetails()}
        </table>
      </div>
    </div>
  );
}
