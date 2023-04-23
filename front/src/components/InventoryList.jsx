import { useEffect, useState } from "react";
import { getInventory } from "../api/inventory.api";
import { InventoryCard } from './InventoryCard';

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
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <InventoryCard key={item.inventory_id} item={item} />
     ))}
    </div>
  );
}
