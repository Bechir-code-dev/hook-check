import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import {Routes,Route} from 'react-router-dom';
import TrailerDescription from "./Components/TrailerDescription";

function App() {
 return(
  <>
  <Routes>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/trailer/:id' element={<TrailerDescription/>}></Route>
  </Routes>
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
