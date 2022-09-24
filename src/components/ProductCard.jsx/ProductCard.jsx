import React from 'react'

export default function (props) {
  return (
    <div className='rounded-xl bg-slate-900 text-emerald-500 flex-col p-5 text-center hover:scale-110 duration-300'>
      <h2 className='text-xl m-5'>{props.title}</h2>
      <img src={props.image} alt="product" className='m-5' />
      <p className='text-l m-5'>{props.description}</p>
    </div>
  )
}
