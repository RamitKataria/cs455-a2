import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import RecipeItem from "./recipeItem";
import {add, removeAll} from "./recipeSlice";
import Modal from "../../components/modal";
import RecipeForm from "./recipeForm";

const RecipesList = () => {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);

    return (
        <section className="recipes-list">
            <span id='recipes-list-header'>
                <h2>Your Recipes</h2>
                <button onClick={() => dispatch(removeAll())}>Remove All</button>
            </span>
            {showForm &&
                <Modal handleClose={() => setShowForm(false)}>
                    <RecipeForm submitRecipe={(recipe) => {
                        dispatch(add(recipe));
                        setShowForm(false)
                    }}/>
                </Modal>}
            {Object.keys(recipes).map((recipeTitle) =>
                <RecipeItem key={recipeTitle}
                            title={recipeTitle}
                            ingredients={recipes[recipeTitle]['ingredients']}
                            steps={recipes[recipeTitle]['steps']}/>
            )}
            <button onClick={() => setShowForm(true)}>+</button>
        </section>
    )
}

export default RecipesList;
