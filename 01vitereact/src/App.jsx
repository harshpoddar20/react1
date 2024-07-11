
import Chai from "./chai"


function App() {

  const username="welcome"

  return (

    <>
     {/*above part is a fragment in which all parts are written as we can send only one part from app to main.jsx  */}
     {/* funcction of main.jsx sould be in a capital letter and all files sould be jsx and not js */}

    <Chai />

    <p>{username}</p>
    {/*above para is to write a variable and it is done within curly brakets  */}
    
    <p>test para</p>
    </>
  )
}

export default App
