import {useNavigate} from 'react-router-dom'

export function InventoryCard( { item }) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-zinc-800 p-3 hover:bgzinc-700
      hover:cursor-pointer"
      onClick={() => {
        navigate('/dvdrental/inventory/' + item.inventory_id);
      }}
    >
      <p>Inventory ID: {item.inventory_id}</p>
      <p>Store ID: {item.store_id}</p>
      <p>Last Update: {item.last_update}</p>
      <p>Film ID: {item.film}</p>
      <hr />
    </div>
  );
}