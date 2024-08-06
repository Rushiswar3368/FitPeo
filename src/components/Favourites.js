export default function Favourites() {
    return(
        <div class="col-sm-12 col-md-3 ms-3 mb-3 mt-3 tile">
          <table class="table table-borderless mx-auto mt-4">
            <tr>
                <td style={{width:"5px"}}><i style={{borderRadius:"50%", margin:"20px"}} class="bg-danger fa-regular fa-circle-dot"></i></td>
                <td>Goals</td>
                <td><i style={{float:"right", borderRadius:"50%"}} class="mx-4 tile text-light fa-solid fa-arrow-right"></i></td>
            </tr>

            <tr>
                <td style={{width:"5px"}}><i style={{borderRadius:"50%", margin:"20px"}} class="bg-info fa-solid fa-burger"></i></td>
                <td>Popular Dishes</td>
                <td><i style={{float:"right", borderRadius:"50%"}} class="mx-4 tile text-light fa-solid fa-arrow-right"></i></td>
            </tr>

            <tr>
                <td style={{width:"5px"}}><i style={{borderRadius:"50%", margin:"20px"}} class="bg-success fa-solid fa-bowl-food"></i></td>
                <td>Menus</td>
                <td><i style={{float:"right", borderRadius:"50%"}} class="mx-4 tile text-light fa-solid fa-arrow-right"></i></td>
            </tr>
          </table>
        </div>
    )
}