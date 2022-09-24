import React from 'react'

export default function Link({category}) {
  return (
    <h3><a href="" className='text-2xl m-5 cursor-pointer text-green-400 hover:text-emerald-600 transition-colors duration-200'>{category}</a></h3>
  )
}
