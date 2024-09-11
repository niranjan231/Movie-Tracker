import logo from './logo.svg';
import './App.css';
import user from './user';
import { useState } from 'react';
import Movie from "./Movie"
import { BiMoviePlay } from "react-icons/bi";
import Poap from './Poap';




function App() {
  const [search , setSearch] = useState("");
const [Count , setAdd] = useState(2)
const [show , setShow] = useState(false);



const handlePoap=()=>[
  setShow(true)
]
const handleAdd=()=>{
setAdd(Count+1)
}
  const handleMOvie=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <>
    <div className='app-1' onClick={handlePoap} >{Count}</div>
    <div className="app">
      <span><BiMoviePlay /></span>
     <h2>Search Movie</h2>
     <input onChange={handleMOvie}  type="text" placeholder="search movie" ></input>





  {
    user.filter((data)=>{
      return search.toLowerCase()===" " ? data :
      data.name.toLowerCase().includes(search);
          })  .map((data)=>{
return   <Movie handleAdd={handleAdd} user={user}/>
    })
  }
  
    </div>
    {
      show && user.map((data)=>{
        return <Poap user={user} />
      })
    }
    </>
  );
}

export default App;
