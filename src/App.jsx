import Heading from "./Component/Heading.jsx"
import Cards from "./Component/Cards.jsx"
import Data from "./Component/data.jsx"
import './App.css'

function App() {
  return (
    <div className='bg-[#d8dadf] min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <Heading></Heading>
      <Cards Data = {Data}></Cards>
    </div>
  )
}

export default App
