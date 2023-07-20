import './App.css';
import { useState } from 'react';
import users from './Array';
// import ReactDOM from 'react-dom/client';
function App() {
  const [boolen,setBoolen] = useState(true)
  const [color, setColor] = useState("pink")
  // const [name,setName] = useState("Jumanazar")
  // const [lastName, setLastName] = useState("Boqiyev")
  // const [data, setData] = useState("12.12.2345")
  // const [ssilka, setSsilka] = useState("15.jfif")
  const forma =document.querySelectorAll('input');
  console.log(forma);
  function joinArray(){
    forma.forEach((item)=>{
      console.log(item.name)
    })
  }
    
  function onBlack(){
    setColor('black')
    setBoolen(false)
  }
  function onPink(){
    setColor('pink')
    setBoolen(true)
  }
  return (
    <div className="App">
      <header className={color}>
        <div key = "1">
          {boolen && <button onClick = {()=> onBlack()}>
            Black
          </button>}
          {!boolen && <button onClick = {()=>onPink()}>
            Light
          </button>}
        </div>

        <div className='cards'>
          <h1>Brithdays</h1>
          {users.forEach((item)=>{
            {console.log(item.nam)}
          <div className='cards__item'>
            <img className='cards__item--img' src={item.img}></img>
            <h3>
              {item.nam} {item.lastNam}
            </h3>
            <p>
              {item.dat}
            </p>
            <button>Remove</button>
          </div>})}
        </div>
        <button>Clean All</button>
        <button>Join</button>
      </header>
      <section className='register'>
        <form id='forma'>
          <input type='text' placeholder='Name'id='name' name='nam'></input>
          <input type='text' placeholder='Last Name' id='last-name' name='lastNam'></input>
          <input type='date' placeholder='Data' id='data' name='dat'></input>
          <input type='text' placeholder='img-ssilka' id='sslika' name='img'></input>
          <button type='submit' onClick={()=> joinArray()}>Sent</button>
        </form>
      </section>
    
    </div>
  );
}

export default App;
