import CardComp from './components/card.js';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function Main() {
  let [items, setItems] = useState([]);

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

  useEffect( () => {
    getData();
  });

  async function handleSubmit(event) {
    event.preventDefault();
    let searchedValue = event.target.search.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

       if (data.meals) {
         let filteredValue = data.meals.filter(function (item) {
           return item.strMeal
             .toLowerCase()
             .includes(searchedValue.toLowerCase());
         });

         setItems(filteredValue);
       } else {
        setItems([]);
       }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form className="d-flex" style={{padding: "0.5rem 0", maxWidth: "600px", margin: "auto"}} onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search here.."
          className="me-2"
          aria-label="Search"
          name="search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          margin: "1rem 0 0 1rem",
        }}
      >
        {items.length !== 0 ? (
          items.map(function (item) {
            return (
              <CardComp
                image={item.strMealThumb}
                title={item.strMeal}
                description={item.strInstructions}
              />
            );
          })
        ) : (
          <h3 style={{marginTop:"2rem",color:"red"}}>Meal not found</h3>
        )}
      </div>
    </>
  );
}
export default Main;