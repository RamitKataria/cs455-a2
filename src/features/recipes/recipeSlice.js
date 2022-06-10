import {createSlice} from '@reduxjs/toolkit';

const initialRecipeJsonStr = '{"Sandwich":{"ingredients":["2 slices of bread","A protein of your choice","Veggies of your choice","Cheese slices (optional)","Dressings of your choice"],"steps":["Put spread-type dressings on one or both slices of bread","Place the protein on one of the slices","Place the cheese slice on top of the protein","Now place the cheese slice","Add in any sauce-type dressings","Place the other slice on top and compress the sandwich a little"]},"Quinoa Tabouli":{"ingredients":["1 Cup (Preferably Red) Quinoa","2 Cups Water","1 Cucumber, seeded, small dice","3 Tomatoes, small dice","1 Small Red onion, minced","1 Garlic Clove, fine dice","1 Cup Parsley, chopped","1/2 Cup Fresh Mint","1/2 Cup Fresh Lemon Juice","1/4 Cup Olive Oil","1 Tsp Salt"],"steps":["In medium sauce pan bring quinoa, 1/2 tsp salt, and 2 cups of water to a boil. Reduce heat, cover and simmer for 15 minutes. Remove from heat and cool completely, allowing any remaining water to evaporate.","Toss cooled quinoa with all remaining ingredients in a large mixing bowl. Adjust seasoning with salt and pepper. Serve with crackers or as a side dish."]}}';
const savedData = JSON.parse(localStorage.getItem('recipes'));
const initialState = savedData ? savedData : JSON.parse(initialRecipeJsonStr);

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        add: (state, action) => {
            state[action.payload.title] = {
                ingredients: action.payload.ingredients,
                steps: action.payload.steps
            }
        },
        removeAll: (state) => {
            Object.keys(state).forEach((key) => delete state[key]);
        },
        remove: (state, action) => {
            delete state[action.payload];
        }
    },
});

export const {add, removeAll, remove} = recipeSlice.actions;
export default recipeSlice.reducer;
