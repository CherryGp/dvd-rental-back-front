// import { useEffect, useState } from 'react';
// import { getTopCustomers } from '../api/topcustomers.api';

// export function TopCustomersList() {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     async function loadTopCustomers() {
//       const res = await getTopCustomers();
//       setCustomers(res.data.top_customers);
//     }
//     loadTopCustomers();
//   }, []);

//   return (
//     <div>
//       <h2>Top Customers</h2>
//       <ul>
//         {customers.map((customer, index) => (
//           <li key={index}>
//             <p>{customer.first_name} {customer.last_name}</p>
//             <p>Total Payments: {customer.total_payments}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
