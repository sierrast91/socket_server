import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Lobby from './component/Lobby';
function App() {
  const [user,setUser] = useState({name:"",pass:""});

  const log = (name:string,pass:string)=>{
    setUser({name:name,pass:pass})
  }
  return (
      <div>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login log ={log}/>}/>
            <Route path="/lobby" element={<Lobby name={user.name}/>}/>
            <Route
              path="*"
              element={
              <main><p>There's nothing here!</p></main>}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App