import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export default function SewingPage() {
  return (
    <ItemListContainer
      greeting="Beautiful tissues!"
      items={[
        {
          title: 'ProductSewing1',
          image: 'https://picsum.photos/200',
          description: 'ProductSewing1 object decription',
        },
        {
          title: 'ProductSewing2',
          image: 'https://picsum.photos/201',
          description: 'ProductSewing2 object decription',
        },
        {
          title: 'ProductSewing3',
          image: 'https://picsum.photos/202',
          description: 'ProductSewing3 object decription',
        }
      ]}
    />
  );
}
