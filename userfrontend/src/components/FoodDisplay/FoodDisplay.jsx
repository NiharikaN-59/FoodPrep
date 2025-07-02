import { useContext, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodCard from '../FoodCard/FoodCard'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  /*console.log("FoodDisplay is rendering");  //just for testing*/
  const [sortOption, setSortOption] = useState('');
  let filteredList = food_list.filter(item => category === "All" || item.category === category);

  if (sortOption === 'price_asc') {
    filteredList.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price_desc') {
    filteredList.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'relevance') {
    filteredList.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
  }

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-header">
        <h2>Top Dishes near you</h2>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="relevance">Most Relevant</option>
        </select>
      </div>
      <div className='food-display-list'>
        {
          filteredList.map((item, index) => {
            /*console.log("Checking item:", item.name, "with category:", item.category) //to check in console for clarification */
            if (category === "All" || category === item.category) {
              return (
                <FoodCard key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
              )
            }
          })}
      </div>
    </div>
  )
}

export default FoodDisplay