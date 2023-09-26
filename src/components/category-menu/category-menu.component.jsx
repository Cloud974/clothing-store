import CategoryItem from '../category-item/category-item.component';
import './category-menu.styles.scss';

const CategoryMenu = () => {
  const categories = [
    {
      id: 1,
      title: 'Mens',
      imageUrl: 'https://teddyfresh.com/cdn/shop/collections/Men_-_Tops_1600x.jpg?v=1694105624',
    },
    {
      id: 2,
      title: 'Womens',
      imageUrl: 'https://teddyfresh.com/cdn/shop/collections/Women_Shop_All_1600x.jpg?v=1694105625',
    },
    {
      id: 3,
      title: 'Accessories',
      imageUrl: 'https://teddyfresh.com/cdn/shop/collections/image_a16e8056-d025-4e36-9065-5980fcd52539_1600x.jpg?v=1694105626',
    },
    {
      id: 4,
      title: 'New Arrivals',
      imageUrl: 'https://teddyfresh.com/cdn/shop/collections/velvetjacket_1600x.jpg?v=1694105621',
    },
    {
      id: 5,
      title: "Last Chance",
      imageUrl: 'https://teddyfresh.com/cdn/shop/collections/collection_size_sale_banner_1600x.jpg?v=1694710253',
    },
  ]

  return (
    <div className="categories-menu">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryMenu;