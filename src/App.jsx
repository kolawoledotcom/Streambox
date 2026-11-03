import NavBar from "./Components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Series from "./Pages/Series"
import Movies from "./Pages/Movies"
import Music from "./Pages/Music"
import Sports from "./Pages/Sports"
import Gaming from "./Pages/Gaming"


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/series" element= {<Series></Series>}></Route>
          <Route path="/movies" element= {<Movies></Movies>}></Route>
          <Route path="/music" element= {<Music></Music>}></Route>
          <Route path="/sports" element= {<Sports></Sports>}></Route>
          <Route path="/gaming" element= {<Gaming></Gaming>}></Route>
         

        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App