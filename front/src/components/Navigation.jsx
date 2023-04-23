import {Link} from 'react-router-dom';

export function Navigation() {
  return ( 
    <nav>
      <ul>
        <li>
          <Link to='/dvdrental/inventory/'>
            <h1>Dvd rental inventory</h1>
          </Link>
        </li>
        <li>
          <Link to="/dvdrental/inventory/create">Create Inventory</Link>
        </li>
        <li>
          <Link to="/dvdrental/topcustomers/">Top Customers</Link>
        </li>
        <li>
          <Link to="/dvdrental/topfilms/">Top Films</Link>
        </li>
      </ul>
    </nav>
  )
}

