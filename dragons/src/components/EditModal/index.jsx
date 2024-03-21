import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditDragonSchema } from "./editDragon.schema";

export function EditModal() {
    const {closeEditModal, editDragon, editingDragon} = useContext(DragonContext);

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(EditDragonSchema),
        values: {
            name: editingDragon.name,
            type: editingDragon.type,
            history: editingDragon.history,
        },
    });

    const submit = (formData) => {
        editDragon(formData);
        closeEditModal();
    }

    return (
        <div className="w-full h-screnn bg-zinc-900 fixed inset-0 bg-opacity-50 flex items-center justify-center" role='dialog'>
            <section className="w-64 h-72 bg-zinc-900 flex flex-col items-center justify-center rounded object-center border-2 border-black">
                <div className="w-full flex items-center justify-around pb-2.5 text-red-500 font-semibold">
                    <h3>Dragon details</h3>
                    <button onClick={()=>closeEditModal()}>X</button>
                </div>
                
                <form className="flex flex-col items-center" onSubmit={handleSubmit(submit)}>
                    <div className="flex flex-col items-center pb-2.5">
                        <label>Name</label>
                        <input className="bg-zinc-800 rounded pl-1 pt-0.5" name='name' placeholder='Type name here...' type='text' {...register('name')}/>
                    </div>

                    <div className="flex flex-col items-center pb-2.5">
                        <label>Type</label>
                        <input className="bg-zinc-800 rounded pl-1 pt-0.5"  name='type' placeholder='Type the type here...' type='text' {...register('type')}/>
                    </div>

                    <div className="flex flex-col items-center pb-2.5">
                        <label>History</label>
                        <input className="bg-zinc-800 rounded pl-1 pt-0.5"  name='history' placeholder='Type the history here...' type='text' {...register('history')}/>
                    </div>
                    <button className="mt-2.5 size-12 bg-red-600 hover:bg-red-700 w-14 h-6 rounded font-semibold" type='submit'>Save</button>
                </form> 
            </section>
        </div>
    )
}