import React from 'react'

export default function DeviceCard(props:any) {
  return (
    <div className='border border-solid border-gray-400 m-5 bg-gray-800'>
        <p className='text-xl p-1'><span className='bg-sky-400 pl-5 pr-5 mr-5'>{props.obj.id}</span>{props.obj.seri}</p>
        <hr text-sky-400/>
        <p className='text-3xl p-1'>{props.obj.name}</p>
    </div>
  )
}
