import React from 'react';

const RecipeContent = ({title, ingredients, steps}) => {
    return (
        <article className="card">
            <h2 className="card-header">{title}</h2>
            <div className="card-content">
                Ingredients:
                <ul>{ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
                {steps &&
                    <>
                        Steps:
                        <ol>{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
                    </>}
            </div>
        </article>
    )
}

export default RecipeContent;
