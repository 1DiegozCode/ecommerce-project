import React from 'react';
import ProductCard from '../ProductCard.jsx/ProductCard';

export default function ItemListContainer(props) {
  return (
    <section className="flex-col text-center">
      <h2 className="text-6xl m-10 text-emerald-400">{props.greeting}</h2>
      <div className='flex justify-around'>
        <ProductCard
          title="Fully Artesanal"
          image="https://picsum.photos/200"
          description="Place holder text"
        />
        <ProductCard
          title="100% made with love"
          image="https://picsum.photos/200"
          description="Place holder text"
        />
        <ProductCard
          title="Eco-friendly"
          image="https://picsum.photos/200"
          description="Place holder text"
        />
      </div>
    </section>
  );
}
