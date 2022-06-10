import React, {useState} from "react";
import Card from "../../components/card";
import Modal from "../../components/modal";
import RecipeContent from "./recipeContent";
import {useDispatch} from "react-redux";
import {remove} from "./recipeSlice";

const RecipeItem = ({title, ingredients, steps}) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            {open &&
                <Modal handleClose={() => setOpen(false)}>
                    <RecipeContent title={title} ingredients={ingredients} steps={steps}/>
                </Modal>}
            <Card handleOpen={() => setOpen(true)}>
                <RecipeContent title={title} ingredients={ingredients}/>
                <button onClick={() => dispatch(remove(title))}>Remove</button>
            </Card>
        </>
    )
}

export default RecipeItem;
