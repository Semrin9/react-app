import React, { useEffect, useState } from "react";
import CardComp from "./components/card";

function Products() {
  const [items, setItems] = useState([]);

  async function getData() {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

    try {
      const response = await fetch(url);
      const result = await response.json();
      setItems(result.meals);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  });

  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"1rem", marginLeft:"2rem"}}>
      {items.map((item) => (
        <CardComp
          image={item.strMealThumb}
          title={item.strMeal}
          description={item.strInstructions}
        />
      ))}
    </div>
  );
}

export default Products;