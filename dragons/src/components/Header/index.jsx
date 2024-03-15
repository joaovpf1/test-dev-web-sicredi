import dragonIcon from "../../assets/dragon32x32.png";

export function Header() {
    return (
      <>
        <header>
            <div>
                <h1>Dragons</h1>
                <img src={dragonIcon} alt="Dragon Icon" />
            </div>
        </header>
      </>
    )
  }