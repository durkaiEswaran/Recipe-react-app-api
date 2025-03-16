import React from"react"
import ReactMarkdown from "react-markdown"

function Recipe(props){
    return(
        <section className="recipe-app container">
          <h2>Chef Claude Recommends:</h2>
          <ReactMarkdown>
      {props.recipe}
    </ReactMarkdown>
  </section>
    )
}
export default Recipe;