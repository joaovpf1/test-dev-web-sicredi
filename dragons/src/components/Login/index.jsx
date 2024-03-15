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
        <main>
          <div>
            <h1>
              Login
            </h1>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="Email" id="email" {...register("email")}/>
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="Password" id="password" {...register("password")}/>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </main>
      </>
  )
}