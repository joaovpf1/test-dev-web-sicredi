import dragonIcon from "../../assets/dragon32x32.png";

export function Header() {
    return (
      <>
        <header className="w-full bg-zinc-900 h-14">
            <div className="flex items-center justify-around pt-2.5">
                <h1 className="font-semibold ">Dragons</h1>
                <img src={dragonIcon} alt="Dragon Icon" />
            </div>
        </header>
      </>
    )
  }