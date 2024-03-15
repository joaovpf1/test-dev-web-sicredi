import { Header } from "../Header"

export function Login() {
  return (
      <>
        <Header/>
        <main>
          <div>
            <h1>
              Login
            </h1>
            <form onSubmit={""}>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="Email" id="email" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="Password" id="password"/>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </main>
      </>
  )
}