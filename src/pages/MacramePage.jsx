import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export default function MacramePage() {
  return (
    <ItemListContainer
      greeting="Beautiful macrame art!"
      items={[
        {
          title: 'ProductMacrame1',
          image: 'https://picsum.photos/203',
          description: 'ProductMacrame1 object decription',
        },
        {
          title: 'ProductMacrame2',
          image: 'https://picsum.photos/204',
          description: 'ProductMacrame2 object decription',
        },
        {
          title: 'ProductMacrame3',
          image: 'https://picsum.photos/205',
          description: 'ProductMacrame3 object decription',
        },
      ]}
    />
  );
}
