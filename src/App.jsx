import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipe from './recipe'
import { getRecipeFromMistral } from './javascript'

function App() {
    const [arr,setArr] = useState([])
    const ingrediant = arr.map(arrs=>(
      <li key={arrs} className='list-ing'> {arrs} </li>
    ))
    const [recipe,setRecipe] = useState("")
    async function recipeShown() {
      const recipeMarkdown = await getRecipeFromMistral(arr);
      console.log(recipeMarkdown);
      setRecipe(recipeMarkdown);  // Update state
    }
    
  function submit(event){
    event.preventDefault()
    const formdata = new FormData(event.currentTarget)
    const newIngrediant = formdata.get('ingrediants')
    setArr((prevarr)=>{
      return [...prevarr,newIngrediant]
    })
    event.currentTarget.reset();
  }
  console.log(arr)

  
  return (
    <main>
    <form onSubmit={submit} className="container d-flex search" >
      <input type="text" className='form-group' placeholder='e.g. oregano' name='ingrediants' />
      <button className='btn'>+Add ingredient</button>
      </form>
      {
          arr.length>0 && 
      <section>
      <div className="container ingrediants">
          <h2>Ingrediants on Hand:</h2>
        <ul className='ul'>
        {ingrediant}
        </ul>
      </div>
      {
        arr.length >=3 &&
      <div className="container recipe">
        <div>
        <h4>Ready for a recipe?</h4>
        <p>Generate your recipe from your list of ingrediants</p>
        </div>
        <button className='btn-recipe' onClick={recipeShown}>{recipe ? "recommeded recipe": 'get a recipe'}</button>
      </div>
      }
      </section>
}
{
  recipe &&
  <Recipe recipe = {recipe}/>
}
    </main>
  )
}

export default App


