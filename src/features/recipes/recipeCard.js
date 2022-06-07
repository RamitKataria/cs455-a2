import React from "react";

const RecipeCard = ({title, ingredients, steps}) => {
    console.log(ingredients[0])
    return (
        <article className="card">
            <h2 className="card-header">{title}</h2>
            <div className="card-content">
                Ingredients:
                <ul>{ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
                Steps:
                <ol>{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
                {/*<button className="remove-button" onClick="removeRecipe(this)">REMOVE</button>*/}
            </div>
        </article>
    )
}

export default RecipeCard;
