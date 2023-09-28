import CardComp from './components/card.js';
import data from './data/data.json';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Main() {
  let [items, setItems] = useState(data);

  function handleSubmit(event) {
    event.preventDefault();

let searchedValue = event.target.search.value;
let filteredValue = data.filter(function (item) {
      return item.title.toLowerCase().includes(searchedValue.toLowerCase());
    });
    setItems(filteredValue);
  }
  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmit}>
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
        {items.map(function (item) {
          return (
            <CardComp
              image={item.image_url}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
}
export default Main;