import React from 'react';
import Header from '../components/Header/Header';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export default function LandingPage() {
  return (
    <>
      <ItemListContainer
        greeting="Welcome to our shop!"
        items={[
          {
            title: 'Fully Artesanal',
            image: 'https://picsum.photos/199',
            description: 'It is artesanal',
          },
          {
            title: '100% made with love',
            image: 'https://picsum.photos/198',
            description: 'Actual love in each product',
          },
          {
            title: 'Eco-friendly',
            image: 'https://picsum.photos/197',
            description: 'Green Friend!',
          },
        ]}
      />
    </>
  );
}
