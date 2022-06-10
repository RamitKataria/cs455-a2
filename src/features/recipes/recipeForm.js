import React from 'react';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingredients: '',
            steps: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props['submitRecipe']({
            title: this.state.title,
            ingredients: this.state.ingredients.split('\n'),
            steps: this.state.steps.split('\n'),
        })
    }

    render() {
        return (
            <form id='new-recipe-form' onSubmit={this.handleSubmit}>
                <label>
                    Recipe Name
                    <input name='title' type='text' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Ingredients <span className='small'>(separate by line break)</span>
                    <input name='ingredients' type='textarea' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Steps <span className='small'>(separate by line break)</span>
                    <input name='steps' type='textarea' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="reset" value="Reset"/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default RecipeForm;
