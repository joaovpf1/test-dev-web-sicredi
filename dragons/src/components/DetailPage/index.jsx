import { Header } from "../Header";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"

export function DetailPage() {
    const {detailDragon, setDetailDragon} = useContext(DragonContext);
    
    const navigate = useNavigate();

    const backBttn = ()=>{
        setDetailDragon({})
        navigate('/home')
    }

    return (
      <>
        <Header/>
        <main className="min-h-screen flex justify-center flex-col items-center pb-24"> 
            <div className="w-3/5 h-auto rounded border-2  border-red-600">
                <div className="flex items-center justify-around w-full pt-4">
                    <h1 className="text-lg bold">Dragon details:</h1>
                    <button className="rounded bg-red-500 w-10 hover:bg-red-700" onClick={()=>backBttn()}>
                        back
                    </button>
                </div>
                <section className="flex flex-col gap-6 items-center pt-10">
                    <div >
                        <h1 className="text-red-600 font-semibold text-2xl">{detailDragon.name}</h1>
                    </div>
                    <div className="pb-4 flex flex-col gap-2">
                        <h2><b className="text-red-500">Type:</b>  {detailDragon.type}</h2>
                        <h2><b className="text-red-500">Creation date:</b>  {detailDragon.createdAt}</h2>
                    </div>
                </section>
            </div>
        </main>
      </>
    )
  }