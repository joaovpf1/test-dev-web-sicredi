import { DragonList } from "../DragonList"
import { Header } from "../Header"

export function Home() {
    return (
      <>
        <Header/>

        <main>
          <section>
            <h2>Gostaria de adicionar um novo dragão?</h2>
            <button>Adicionar</button>
          </section>
          <DragonList/>
        </main>
      </>
    )
  }