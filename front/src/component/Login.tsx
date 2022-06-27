import React from 'react'
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
export default function Login(props:any) {
    let nav = useNavigate();
    const handle_submit = (e:React.FormEvent)=>{
        e.preventDefault();
        var name = ((e.target as HTMLFormElement).children[1] as HTMLInputElement);
        var pass = ((e.target as HTMLFormElement).children[3] as HTMLInputElement);
        if(name.value&&pass.value){
            props.log(name.value,pass.value);
            name.value="";
            pass.value="";
            nav("/lobby");
        }
    }
  return (
    <div className="h-screen bg-gray-900 p-20 text-gray-200 flex flex-col items-center">
        <p className='text-center text-4xl mb-20'>Foras Medikal</p>
        <form className='flex flex-col text-sky-400 w-72'
        onSubmit={e=>handle_submit(e)}>
        <p className='pl-1 m-1'>name</p>
        <input className='focus:outline-none text-center text-xl p-1 rounded placeholder-sky-200'
          placeholder='name' type='text'/>
        <p className='pl-1 m-1'>password</p>
        <input className='focus:outline-none text-center text-xl p-1 rounded placeholder-sky-200'
          placeholder='password' type='password'/>
        <button className='mt-6 p-2 text-xl text-gray-200 bg-sky-400 rounded-xl font-bold tracking-wider
        hover:bg-sky-500 active:bg-sky-700'
          type='submit'>Enter</button>
      </form>
      <Outlet/>
    </div>
  )
}


