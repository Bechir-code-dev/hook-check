import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';



function App() {
  return(
    <> 
    <MovieList></MovieList>
    </>
  )
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