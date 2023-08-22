import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        inputValue: ''
    }
    handleChange = event => {
        const data = event.currentTarget.value;
        if(data.trim() === '') {
            return;
        }
        this.setState({ inputValue: event.currentTarget.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();      
    }

    resetForm = () => {
        this.setState({ inputValue: ''});
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button 
                        type="submit" 
                        className={css.SearchForm_button} 
                    >
                        <span className={css.SearchForm_button_label}>Search</span>
                    </button>

                    <input
                        className={css.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}