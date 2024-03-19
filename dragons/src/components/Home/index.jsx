import { DragonList } from "../DragonList";
import { Header } from "../Header";
import { Link } from 'react-router-dom';

export function Home() {
    return (
      <>
        <Header/>

        <main>
          <section>
            <h2>Gostaria de adicionar um novo dragão?</h2>
            <Link to='/create'>
            <button>Adicionar</button>
            </Link>
          </section>
          <DragonList/>
        </main>
      </>
    )
  }