import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Link({ category }) {
  return (
    <h3>
      <NavLink
        to={category === 'Contact' ? '/contact' :`/category/${category.toLowerCase()}`}
        key = {category + 'link'}
        className="text-2xl m-5 cursor-pointer text-green-400 hover:text-emerald-600 transition-colors duration-200"
      >
        {category}
      </NavLink>
    </h3>
  );
}
