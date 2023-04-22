import {Link} from 'react-router-dom'

export function Navigation() {
  return ( 
    <div>
        <Link to='/dvdrental/inventory/'>
        <h1>Dvd rental inventory</h1>
        </Link>
        <Link to="/dvdrental/inventory-create/">create inventory</Link>
        <h1>Top Customers</h1>
        <Link to="/dvdrental/topcustomers/">Top Customers</Link>
        <h1>Top films</h1>
        <Link to="/dvdrental/topfilms/">Top Films</Link>
    </div>
  )
}







//       <Link to="/inventory">
    //     <h1>Inventory</h1>
    //   </Link>
//     </div>
//   )
// }

//      <Link to="/inventory-create">create inventory</Link>