import { createSlice } from '@reduxjs/toolkit';

const initialRecipeJsonStr = '{"Sandwich":{"ingredients":["2 slices of bread","A protein of your choice","Veggies of your choice","Cheese slices (optional)","Dressings of your choice"],"steps":["Put spread-type dressings on one or both slices of bread","Place the protein on one of the slices","Place the cheese slice on top of the protein","Now place the cheese slice","Add in any sauce-type dressings","Place the other slice on top and compress the sandwich a little"]},"Quinoa Tabouli":{"ingredients":["1 Cup (Preferably Red) Quinoa","2 Cups Water","1 Cucumber, seeded, small dice","3 Tomatoes, small dice","1 Small Red onion, minced","1 Garlic Clove, fine dice","1 Cup Parsley, chopped","1/2 Cup Fresh Mint","1/2 Cup Fresh Lemon Juice","1/4 Cup Olive Oil","1 Tsp Salt"],"steps":["In medium sauce pan bring quinoa, 1/2 tsp salt, and 2 cups of water to a boil. Reduce heat, cover and simmer for 15 minutes. Remove from heat and cool completely, allowing any remaining water to evaporate.","Toss cooled quinoa with all remaining ingredients in a large mixing bowl. Adjust seasoning with salt and pepper. Serve with crackers or as a side dish."]}}';
const initialState = JSON.parse(initialRecipeJsonStr);

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = recipeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
    }
};

export default recipeSlice.reducer;