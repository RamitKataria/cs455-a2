import React from 'react';
import { useSelector } from "react-redux";
import RecipeCard from "./recipeCard";

const RecipesList = () => {
    const recipes = useSelector(state => state.recipes)

    return (
        <section className="recipes-list">
            <h2>Your Recipes</h2>
            {Object.keys(recipes).map( (recipeTitle) =>
                <RecipeCard key={recipeTitle}
                            title={recipeTitle}
                            ingredients={recipes[recipeTitle]['ingredients']}
                            steps={recipes[recipeTitle]['steps']}/>
            )}
        </section>
    )
}

export default RecipesList;