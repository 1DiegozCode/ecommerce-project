import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to="/">
      <h1 className="text-5xl m-5 font-medium text-green-400 hover:text-emerald-600  cursor-pointer">
        Macondo HandCrafts
      </h1>
    </NavLink>
  );
}
