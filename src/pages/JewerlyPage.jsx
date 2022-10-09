import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export default function JewerlyPage() {
  return (
    <ItemListContainer
      greeting="Beautiful emerald jewels!"
      items={[
        {
          title: 'ProductJewerly1',
          image: 'https://picsum.photos/210',
          description: 'ProductJewerly1 object decription',
        },
        {
          title: 'ProductJewerly2',
          image: 'https://picsum.photos/211',
          description: 'ProductJewerly2 object decription',
        },
        {
          title: 'ProductMacrame3',
          image: 'https://picsum.photos/212',
          description: 'ProductJewerly3 object decription',
        },
      ]}
    />
  );
}
