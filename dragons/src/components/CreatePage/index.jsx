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
        <main className="min-h-screen flex items-center justify-center pb-24">
            <section className="w-64 h-72 bg-zinc-900 flex flex-col items-center justify-center rounded">
                <div className="w-full flex items-center justify-around pb-2.5 ">
                    <h1 className="text-red-500 font-semibold">Create a dragon:</h1>
                    <Link className="text-center font-semibold" to='/home'>X</Link>
                </div>
                <form className="flex flex-col items-center" onSubmit={handleSubmit(submit)}>
                        <div className="flex flex-col items-center pb-2.5">
                            <label>Name</label>
                            <input className="bg-zinc-800 rounded pl-1 pt-0.5" name='name' placeholder='Type name here...' type='text' {...register('name')}/>
                        </div>

                        <div className="flex flex-col items-center pb-2.5">
                            <label>Type</label>
                            <input className="bg-zinc-800 rounded pl-1 pt-0.5" name='type' placeholder='Type the type here...' type='text' {...register('type')}/>
                        </div>

                        <div className="flex flex-col items-center pb-2.5">
                            <label>History</label>
                            <input className="bg-zinc-800 rounded pl-1 pt-0.5" name='history' placeholder='Type the history here...' type='text' {...register('history')}/>
                        </div>

                        <button className="mt-2.5 size-12 bg-red-600 hover:bg-red-700 w-14 h-6 rounded font-semibold" type='submit'>Save</button>
                    </form> 
            </section>
        </main>
      </>
    )
  }