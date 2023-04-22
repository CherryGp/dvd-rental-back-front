import {Link} from 'react-router-dom'

export function Navigation() {
  return ( 
    <div>
        <Link to='/dvdrental/inventory/'>
        <h1>Dvd rental inventory</h1>
        </Link>
        <Link to="/dvdrental/inventory-create/">create inventory</Link>
    </div>
  )
}







//       <Link to="/inventory">
    //     <h1>Inventory</h1>
    //   </Link>
    //   <Link to="/top-customers">Top Customers</Link>
    //   <Link to="/top-films">Top Films</Link> */
//     </div>
//   )
// }

//      <Link to="/inventory-create">create inventory</Link>