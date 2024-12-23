import './App.css'
// import HomePage from "./Container/UI/HomePage"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Header from './Components/UI/Header'
import HomePage from './Components/UI/HomePage'
import Video from "./Components/UI/Video"
const App = ()=>{

  const [menu,setMenu] = useState(true)
  return(
    <div className="youtube-container">
      <Header setMenu={setMenu}/>
      
      <Routes>
        <Route path="/" element={<HomePage menu={menu}/>}/>
        <Route path="/video/:videoId" element={<Video/>}/>
      </Routes>
      <div className="hero-section">
      {/* <Menu menu={menu}/>*/}
      {/* <HomePage menu={menu}/>  */}
      </div>
    Lalit kumar
    </div>
  )
}
export default App