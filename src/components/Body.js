import { useEffect, useState } from "react";
//import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText,setSearchText]=useState("");
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);
  useEffect(() => {
    console.log("call back function");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    //const res = json?.data?.cards?.find(c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    const res =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurant(res);
    setFilteredRestaurant(res);
    console.log(res);
  };
  // this is called Conditional rendering
  // if (listOfRestaurant.length === 0){
  //   //return <h1>Loading..............</h1>
  //   return <Shimmer></Shimmer>
  // }

  console.log("Body render");
  return listOfRestaurant.length === 0 ? (
    //return <h1>Loading..............</h1>
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={
            (e)=> setSearchText(e.target.value)
          }></input>
          <button onClick={()=>{
            //console.log(searchText);
            const filterResList =listOfRestaurant.filter((res)=>
              //console.log(res)
            
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilteredRestaurant(filterResList);

          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            console.log(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
