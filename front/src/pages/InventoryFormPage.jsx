export function InventoryFormPage() {
  return (
    <div>InventoryFormPage</div>
    )
}
  
  


// import {useForm} from 'react-hook-form'
// import {createInventory} from '../api/inventory.api'

// export function InventoryFormPage() {

//   const {register, handleSubmit, formState: {
//     errors

//   } } = useForm()

//   const onSubmit = handleSubmit(data => {
//     console.log(data)
//   })

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type="number"
//           placeholder="store_id"
//           {...register("store_id", {required: true})}
//         />
//         {errors.store_id && <span>this numeric field is required</span>}
//         <textarea
//           rows="3"
//           placeholder="film"
//           {...register("film", {required: true})}
//         ></textarea>
//         {errors.film && <span>this numeric field is required</span>}
//         <button>Save</button>
//       </form>
//     </div>
//   )
// }
