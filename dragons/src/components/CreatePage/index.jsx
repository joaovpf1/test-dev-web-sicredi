import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"
import { Header } from "../Header";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateDragonSchema } from "./createDragon.schema";
import { Link, useNavigate } from "react-router-dom";

export function CreatePage() {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(CreateDragonSchema),
    });

    const { createDragon } = useContext(DragonContext);

    const navigate = useNavigate();

    const submit = (formData) => {
        createDragon(formData);
        navigate('/home')
    }
    
    return (
      <>
        <Header/>
        <main>
            <div>
                <h1>Criate the dragon:</h1>
                <Link to='/home'>Back</Link>
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
        </main>
      </>
    )
  }