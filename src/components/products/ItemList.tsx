import React from 'react';

type Product = {
    id:number;
    name:string;
    price:number;
}

interface ItemListProps {
    items: Product[];
}

const ItemList: React.FC<ItemListProps> = ({items}) => {
    return (
        <table>
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price.toLocaleString()}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

export default ItemList;