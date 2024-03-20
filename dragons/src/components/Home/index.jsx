import { DragonList } from "../DragonList";
import { Header } from "../Header";
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"
import { EditModal } from "../EditModal";

export function Home() {
  const {editModalVisible} = useContext(DragonContext);

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
          {editModalVisible ? <EditModal/> : null}
        </main>
      </>
    )
  }