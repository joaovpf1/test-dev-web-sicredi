import { DragonList } from "../DragonList";
import { Header } from "../Header";
import { Link } from 'react-router-dom';

export function Home() {
    return (
      <>
        <Header/>

        <main>
          <section>
            <h2>Wnat to create a new <b>dragon</b>?</h2>
            <Link to='/create'>
            <button>Create</button>
            </Link>
          </section>
          <DragonList/>
        </main>
      </>
    )
  }