import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard.jsx/ProductCard';

export default function ItemListContainer(props) {
  return (
    <section className="flex-col text-center">
      <h2 className="text-6xl m-10 text-emerald-400">{props.greeting}</h2>
      <div className="flex justify-around">
        {props.items.map(({ title, image, description }) => {
          const section = title.replace(/Product|[123]/g, '');
          return (
            <Link to={`/item/${title.toLowerCase()}`} key={title}>
              <ProductCard
                title={title}
                image={image}
                description={description}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
