import CategoryItem from '../category-item/category-item.component';
import './category-menu.styles.scss';

const CategoryMenu = () => {
  const categories = [
    {
      id: 1,
      title: 'Mens',
      imageUrl: 'https://media.istockphoto.com/id/1357707696/photo/young-attractive-stylish-man-in-coat-thoughtfully-looking-away-on-street.webp?b=1&s=612x612&w=0&k=20&c=r3p47wMoTLZwt8NRpTUu77YqlPWXB5I0HZDYHKwWTrY=',
    },
    {
      id: 2,
      title: 'Womens',
      imageUrl: 'https://media.istockphoto.com/id/956437960/photo/adding-items-to-my-closet.webp?b=1&s=612x612&w=0&k=20&c=E5hKosiwJHQebJBkquAdfkgFB6jJrLUHdBKyXTY88vU=',
    },
    {
      id: 3,
      title: 'Accessories',
      imageUrl: 'https://images.freeimages.com/images/large-previews/72a/vintage-gold-earrings-1412241.jpg?fmt=webp&w=350',
    },
    {
      id: 4,
      title: 'New Arrivals',
      imageUrl: 'https://media.istockphoto.com/id/1172741222/photo/young-woman-enjoys-snowy-winter.webp?b=1&s=612x612&w=0&k=20&c=ELyF2E9YX3OJh6PU8CWIj5pyFXCKRCs5C5rORGP45_M=',
    },
    {
      id: 5,
      title: "Last Chance",
      imageUrl: 'https://media.istockphoto.com/id/517269673/photo/hanger-for-clothes.webp?b=1&s=612x612&w=0&k=20&c=vP28wM7WZaFhqqb389C88gKZKZPB_CwPnaN1kab35D8=',
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