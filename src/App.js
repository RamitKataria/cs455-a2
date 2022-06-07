import RecipesList from "./features/recipes/recipesList";

function App() {
    return (
        <>
            <main>

                {/*<button className="form-button" id="show-form-button">NEW</button>*/}


                <RecipesList/>

            </main>

            <footer>
                <p>Made by <a href="https://github.com/RamitKataria">Ramit Kataria</a></p>
            </footer>
        </>
    );
}

export default App;
