import { useState } from 'react';
import './App.scss';
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail';
import axios from 'axios'
import Cart from './routes/Cart';

function App() {

  let [dior,setDior] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <nav className='navbar'>
        <div className='diortext'>
          <Link to="/">DIOR</Link>
          <Link to="/detail"><div className='detailtext'>detail</div></Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={
          <>
          <div className='mainbg'></div>
          <div className='container'>
          <div className='row'>
            {
              dior.map((a, i)=>{
                return(
                  <Card dior={dior[i]} key={a.id}></Card>
                )
              })
            }
          </div>
      </div>
      {/* <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((data)=>{
          console.log(data.data);
          let copy = [...dior, ...data.data];
          setDior(copy);
        })
      }}>버튼</button> */}
      </>
        }/>
        <Route path='/detail/:id' element={<Detail dior={dior}/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

    </div>
  );
}

function Card(props){

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/detail/${props.dior.id}`);
  }

  return(
    <div className='col-md-4'>
        <img src={props.dior.url} onClick={handleClick}/>
        <h4>{props.dior.title}</h4>
        <p>{props.dior.price}</p>
    </div>
  )
}

export default App;
