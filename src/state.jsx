import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// function State(){
//     let [count , setCount] = React.useState(0) 
//     function add(){
//       setCount((precount)=>precount+1
//     )
//     }
//     function sub(){
//       setCount((precount)=>precount-1
//       )
//     }
//     // ternary operator :
//     let [ans , setAns] = React.useState(false)
//     function bool(){
//       setAns(ans ? false : true)
//     }
//     return(
//       <main className='counter'>
//         <h1>counter to increase abd decrese:</h1>
//         <div className='count_container'>
//             <button className='minus' onClick={sub}>-</button>
//             <h2 className='count'>{count}</h2>
//             <button className='plus' onClick={add}>+</button>
//         </div>
//         <div className="container">
//           <h3>Do i feel like going out tonight?</h3>
//           <h4 onClick={bool} className='ans'>{ans ? 'yes':'noo'} a</h4>
//         </div>
//       </main>  
//     )

// }
function Addfav(){
  const [myFav, setmyFav] = React.useState([])
  const Allfav = ["orange",'apple','mango','cherry','grapes','pinapple','dragon fruit','guava']
  function addfav(){
    setmyFav(fav=>[...fav,Allfav[fav.length]])
    }
  const displayfav = myFav.map(item=>
    <p key={item}>{item}</p>
  )
  
  return(
    <>
    <button onClick={addfav}>Add item</button>
    <main>
      {displayfav}
    </main>
    </>
  )
}
export default Addfav