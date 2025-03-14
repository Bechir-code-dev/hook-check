import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import movies from "./movies";
import { useState } from "react";
import Filter from "./Components/Filter";
import AddNewMovie from "./Components/AddNewMovie";

function App() {
  const [ourMovies, SetOurMovies] = useState(movies);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

const addmovie = (newmovie) =>{
   SetOurMovies([...ourMovies,newmovie]);
}


  return (
    <>
      <MovieList ourMovies={ourMovies} title={title} rating={rating} />
      <br></br>
      <h4>Your Film</h4>
      <Filter setTitle={setTitle} setRating={setRating} />

      <AddNewMovie addmovie={addmovie} />
    </>
  );
}

export default App;

// -- block use effect --
// const [count,setCount] = useState(0);
// useEffect(()=>{
//   document.title= `You clicked ${count} time`;
// })
// return (
//   <div>
//     <p>Count the number of clicks in page:</p>
//     <button onClick={()=>setCount(count+1)}>Click here</button>
//   </div>
// );

// -- block use state --
// const [quantity,setQuantity]= useState(0);

//   function click () {
//     if (quantity > 0){
//       (setQuantity(quantity-1))
//     }
//   else{alert('stop')}
// }

// return (
//   <>
//   <button onClick={click}>minus</button>
//   <p>{quantity}</p>
//   <button onClick={()=>setQuantity(quantity+1)}>plus</button>
//   </>
// )
