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
        <main className="w-full h-screen flex flex-col items-center">
          <section className="w-full flex items-center justify-around pt-2.5 object-center pb-3">
            <h2>Create a new <b className="text-red-500">dragon</b>!</h2>
            <Link to='/create'>
            <button className="bg-red-600 hover:bg-red-700 w-14 h-6 rounded font-semibold ">Create</button>
            </Link>
          </section>
          <DragonList/>
          {editModalVisible ? <EditModal/> : null}
        </main>
      </>
    )
  }