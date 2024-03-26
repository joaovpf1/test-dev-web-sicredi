import { Header } from "../Header"
import { LoginSchema } from "./LoginSchema"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";

export function Login() {

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(LoginSchema)
  })

  const navigate = useNavigate();

  const submit = (formData) =>{
      if(formData.email == "jv@test.com" && formData.password == "1234"){ 
        navigate("/home")
      }
  }

  return (
      <>
        <Header/>
        <main className="min-h-screen flex items-center justify-center pt-4">
          <div className="pt-4 flex flex-col items-center gap-2 w-64 h-64 bg-zinc-900 rounded">
            <h1 className="text-red-500 font-semibold text-2xl" >
              Login
            </h1>
            <form className="flex flex-col items-center" onSubmit={handleSubmit(submit)}>
              <div className="flex flex-col items-center pb-2.5">
                <label htmlFor="email">E-mail:</label>
                <input className="bg-zinc-800 rounded pl-1 pt-0.5" type="email" name="Email" id="email" {...register("email")}/>
              </div>
              <div className="flex flex-col items-center pb-2.5">
                <label htmlFor="password">Password:</label>
                <input className="bg-zinc-800 rounded pl-1 pt-0.5" type="password" name="Password" id="password" {...register("password")}/>
              </div>
              <button className="mt-2.5 size-12 bg-red-600 hover:bg-red-700 w-14 h-6 rounded font-semibold" type="submit">Login</button>
            </form>
          </div>
        </main>
      </>
  )
}