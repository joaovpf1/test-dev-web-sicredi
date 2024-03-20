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
        <div role='dialog'>
            <section>
                <div>
                    <h3>Dragon details</h3>
                    <button onClick={()=>closeEditModal()}>X</button>
                </div>
                
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label>Name</label>
                        <input name='name' placeholder='Type name here...' type='text' {...register('name')}/>
                    </div>

                    <div>
                        <label>Type</label>
                        <input name='type' placeholder='Type the type here...' type='text' {...register('type')}/>
                    </div>

                    <div>
                        <label>History</label>
                        <input name='history' placeholder='Type the history here...' type='text' {...register('history')}/>
                    </div>
                    <button type='submit'>Save</button>
                </form> 
            </section>
        </div>
    )
}