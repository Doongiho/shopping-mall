import Slider from "../components/common/Slider";
import ItemList from '../components/products/ItemList';
import products from '../../public/products.json';

const Index = (): JSX.Element => {
  const menClothing = products.filter(item => item.category === "men's clothing").slice(0, 4);
  const jewelery = products.filter(item => item.category === "jewelery").slice(0, 4);
  const electronics = products.filter(item => item.category === "electronics").slice(0, 4);

  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <ItemList items={menClothing} category="men's clothing" categoryLabel="패션" />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <ItemList items={jewelery} category="jewelery" categoryLabel="액세서리" />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ItemList items={electronics} category="electronics" categoryLabel="디지털" />
      </section>
    </>
  );
};

export default Index;
