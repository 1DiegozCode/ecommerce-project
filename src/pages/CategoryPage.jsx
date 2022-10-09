import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const {categoryId:category} = useParams();
  return (
    <ItemListContainer
      greeting={"Beautiful " + category}
      items={[
        {
          title: 'Product' + category + '1',
          image: 'https://picsum.photos/203',
          description: 'Product' + category + '1' + ' object decription',
        },
        {
          title: 'Product' + category + '2',
          image: 'https://picsum.photos/204',
          description: 'Product' + category + '2' + ' object decription',
        },
        {
          title: 'Product' + category + '3',
          image: 'https://picsum.photos/205',
          description: 'Product' + category + '3' + ' object decription',
        },
      ]}
    />
  );
}