import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import Link from '../Link/Link.jsx';

export default function NavBar() {
  const categories = ['Jewerly', 'Sewing', 'Macrame', 'Contact'];
  return (
    <ul className="flex justify-evenly items-center">
      {categories.map((category) => (
        <li>
          <Link category={category} key={category + 'key'} />
        </li>
      ))}
      <li ley={'CartWidgetKey'}><CartWidget/ ></li>
    </ul>
  );
}
