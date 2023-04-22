import { useEffect, useState } from "react";
import { getInventory } from "../api/inventory.api";

export function InventoryList() {
  const [items, saveInventory] = useState([]);

  useEffect(() => {
    async function loadInventory() {
      const res = await getInventory();
      saveInventory(res.data.results);
    }
    loadInventory();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.inventory_id}>
          <p>Inventory ID: {item.inventory_id}</p>
          <p>Store ID: {item.store_id}</p>
          <p>Last Update: {item.last_update}</p>
          <p>Film ID: {item.film_id}</p>
        </div>
      ))}
    </div>
  );
}
