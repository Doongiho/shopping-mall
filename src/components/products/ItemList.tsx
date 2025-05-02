import React from 'react';
import styled from 'styled-components';

const Category = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 2rem;
  padding-top: 3rem;
`;

const ProductList = styled.div`
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;

const ProductItem = styled.div`
    border: 1px solid rgb(229 231 235);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: var(--rounded-box, 1rem);
    align-items: center;
    height: 100%;
`;

const ProductImage = styled.img`
    width: 40%;
    transition: transform 0.5s ease; 
      &:hover {
          transform: scale(1.3);      
      }
`;

const ProductFigure = styled.figure`
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductExplanation = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: rgb(243 244 246);
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: var(--padding-card, 2rem);
    gap: .5rem;
`;

const ProductTitle = styled.h1`
  font-weight:600;
  margin-bottom: .75rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const ProductPrice = styled.p`
`;
type Product = {
    id:number;
    title:string;
    price:number;
    image:string;
    category:string;
}

interface ItemListProps {
    items: Product[];
}

const ItemList: React.FC<ItemListProps> = ({items}) => {
    return (
      <>
        <div>
          <Category>패션</Category>
          <ProductList>
            {items
              .filter(item => item.category === "men's clothing")
              .slice(0, 4)
              .map(item => (
                <a href={`/product/${item.id}`} key={item.id}>
                  <ProductItem>
                    <ProductFigure>
                      <ProductImage src={item.image} alt={item.title}/>
                    </ProductFigure>
                    <ProductExplanation>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>${Math.round(item.price).toLocaleString()}</ProductPrice>
                    </ProductExplanation>
                  </ProductItem>
                </a>
            ))}
          </ProductList>
        </div>
        <div>
        <Category>액세서리</Category>
          <ProductList>
            {items
              .filter(item => item.category === "jewelery")
              .slice(0, 4)
              .map(item => (
                <a href={`/product/${item.id}`} key={item.id}>
                  <ProductItem>
                    <ProductFigure>
                      <ProductImage src={item.image} alt={item.title}/>
                    </ProductFigure>
                    <ProductExplanation>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>${Math.round(item.price).toLocaleString()}</ProductPrice>
                    </ProductExplanation>
                  </ProductItem>
                </a>
            ))}
          </ProductList>
        </div>
        <div>
        <Category>디지털</Category>
          <ProductList>
            {items
              .filter(item => item.category === "electronics")
              .slice(0, 4)
              .map(item => (
                <a href={`/product/${item.id}`} key={item.id}>
                  <ProductItem>
                    <ProductFigure>
                      <ProductImage src={item.image} alt={item.title}/>
                    </ProductFigure>
                    <ProductExplanation>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>${Math.round(item.price).toLocaleString()}</ProductPrice>
                    </ProductExplanation>
                  </ProductItem>
                </a>
            ))}
          </ProductList>
        </div>
        </>
      );
    };

export default ItemList;