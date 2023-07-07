import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
const App = () => {
  
  const [before,after]=useState({backgroundColor:"black",color:"white"})
  const changeback=()=>{
  
    after({backgroundColor:"black",color:"white"});
  
  }
  const changewhite=()=>{
  
    after({backgroundColor:"white",color:"black"});
  
  }

  return (
   <>
     <div>
       <Navbar  sty={before} />
       <Content  sty={before}/>
  
    <button style={{backgroundColor:"black" ,color:"white"}} onClick={changeback}>black</button>
    <button onClick={changewhite}>white</button>
      </div>    
    </>
  ) 
}

export default App