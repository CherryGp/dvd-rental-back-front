import {useEffect} from 'react'
import {useForm} from "react-hook-form"
import { createInventory, deleteInventory, updateInventory, getInventoryId } from "../api/inventory.api";
import {useNavigate, useParams} from "react-router-dom"
import {toast} from'react-hot-toast'

export function InventoryFormPage() {
  const
    {register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateInventory(params.id + '/', data)
      toast.success('Inventory updated', {
        position: "bottom-right",
        style: {
          background : "#101010",
          color: "#fff"
        }
      })
    } else {
      await createInventory(data);
      toast.success('Inventory created', {
        position: "bottom-right",
        style: {
          background : "#101010",
          color: "#fff"
        }
      })
    }
    navigate("/dvdrental/inventory/");
  }); 

  useEffect(() => {
    async function loadInventory() {
      if (params.id) {
        const {
          data: {store_id, film},
        } = await getInventoryId(params.id);
        setValue('store_id', store_id)
        setValue('film', film)
      }
    }
    loadInventory();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="Store_id"
          {...register("store_id", {required: true})}
        />
        {errors.store_id && <span>Store_id is required</span>}

        <input
          type="number"
          placeholder="Film_id"
          {...register("film", {required: true})}
        />
        {errors.film && <span>Film_id is required</
        span>}

        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm('Are you sure?');
            if (accepted) {
              await deleteInventory(params.id);
              toast.success('Inventory deleted', {
                position: "bottom-right",
                style: {
                  background : "#101010",
                  color: "#fff",
                },
              });
              navigate("/dvdrental/inventory/");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
  
  