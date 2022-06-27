import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import CmdBox from './CmdBox';
import DeviceCard from './DeviceCard';
export default function Lobby(props:any) {
    let nav = useNavigate();
    type item_t ={id:number,seri:string,name:string}
    const [list,setList] = useState<item_t[]>([
        {id:1,seri:"123123",name:"yel"},
        {id:2,seri:"123321",name:"yel"},
        {id:3,seri:"321321",name:"yel"},
    ]);

    function List(props:any) {

      return (
        <div>
            {props.list.map((item:item_t,index:number)=><DeviceCard key={index} obj={item}/>)}
        </div>
      )
    }

  return (
    <div className='flex flex-row p-2 h-screen bg-gray-900 text-gray-200'>
        <CmdBox logout={()=>{nav("/login")}}/>
        <List list ={list}/>

        <Outlet/>
    </div>
  )
}
