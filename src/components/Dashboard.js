import { DashboardTile, DashboardTile2 } from "./DashboardTile";

export default function Dashboard(){
    return(
        <div class="row">
            <h1 class="ms-4 mb-0">Dashboard</h1>
            <div class="row m-3">
            <DashboardTile description="Total Order"
                number="75"
                sales="&#9650; 3%"
                isProfit={true}
                iconDescription="text-primary fa-2xl fa-solid fa-cart-shopping"
            />
            <DashboardTile description="Total Delievered"
                number="70"
                sales="&#9660; 3%"
                isProfit={false}
                iconDescription="text-success fa-2xl fa-solid fa-bag-shopping"
            />
            <DashboardTile description="Total Cancelled"
                number="5"
                sales="&#9650; 3%"
                isProfit={true}
                iconDescription="text-danger fa-2xl fa-solid fa-solid fa-bag-shopping"
            />
            <DashboardTile description="Total Revenue"
                number="$12k"
                sales="&#9660; 3%"
                isProfit={false}
                iconDescription="text-warning fa-2xl fa-solid fa-scale-balanced"
            />
            <DashboardTile2 netProfit="$6726.25"
                sales="&#9650; 3%"
                percentage="70"
            />
            </div>
        </div>
    )
}