
import './App.css'
import Navbar from "./components/Navbar.jsx";
import ZooLogo from "./assets/zoo_logo.png";

function App() {
  return (
    <>

      <main>
      <div className="grid grid-cols-3 gap-4 w-full mb-10">
        <div className="">
        <Navbar />
        </div>
        <div className=""></div>
        <div className="place-self-end">
        <img src={ZooLogo} className="w-24"></img>
        {/* <div className="m-auto" >1</div>*/}
        </div>
      </div>
        <h1>jdfjdsf</h1>
        <p>Fjdflsdjfjkl</p>
      </main>

    </>
  )
}

export default App
