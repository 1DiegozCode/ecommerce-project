import React from 'react';
import { useParams } from 'react-router-dom';


export default function ItemPage() {
  const {id:title} = useParams();
  return (
    <div className='text-emerald-400 text-center flex flex-col justify-center items-center ' >
    <h2 className="text-6xl m-10">
      {title}
    </h2>
    <img src='https://picsum.photos/1000' alt={title} className='w-1/4'/>
    <p className='text-l m-5'>This is a description</p>
    </div>
  );
}