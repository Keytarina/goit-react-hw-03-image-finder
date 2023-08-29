import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        inputValue: ''
    }

    handleChange = event => {  
        this.setState({ inputValue: event.currentTarget.value.toLowerCase()});
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.inputValue.trim() === '') {
            return toast.error("Упс! Я не знаю що шукати.", {autoClose: 2000});
        }

        this.props.onSubmit(this.state);
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <ToastContainer />
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
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}