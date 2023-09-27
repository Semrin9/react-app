import CardComp from './components/card.js';
import data from './data/data.json';

function Main() {
  return (
    <>
      <div style={{display:"flex",flexWrap:"wrap", gap:"2rem", marginLeft:"9rem"}}> 
        {data.map(function (item) {
          return (

            <CardComp image={item.image_url} title={item.title} />
          );
        })}
      </div>
    </>
  );
}
export default Main;