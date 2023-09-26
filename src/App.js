import './App.css';

function App() {

  const categories = [
    {
      id: 1,
      title: 'Mens',
    },
    {
      id: 2,
      title: 'Womens',
    },
    {
      id: 3,
      title: 'Accessories',
    },
    {
      id: 4,
      title: 'New Arrivals',
    },
    {
      id: 5,
      title: "Last Chance",
    },
  ]

  return (
    <div className="App">
      {categories.map((category) => (
        <div className='category-container'>
          {/* <img /> */}
          <div className='category-body-container' key={category.id}>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
