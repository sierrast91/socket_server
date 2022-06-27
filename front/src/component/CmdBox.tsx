import e from 'express';
import React, { useState } from 'react'

export default function CmdBox(props:any) {
    const [cmd,setCmd] = useState(["Logout","Change Layout"]);
    const handle_click = (target:HTMLButtonElement)=>{
        if(target.textContent==cmd[0]){
            props.logout();
        }
        else if(target.textContent==cmd[1]){
            handle_layout();
        }
    }
  return (
    <div className='flex flex-col p-2'>
        {cmd.map((item,index)=><button key={index} onClick={e=>{handle_click(e.target as HTMLButtonElement)}}
            className='bg-sky-400 active:bg-sky-700 hover:bg_sky-500 rounded-xl p-2 text-xl m-4'>
        {item}</button>)}
    </div>
  )
}

function handle_layout() {
    throw new Error('Function not implemented.');
}

