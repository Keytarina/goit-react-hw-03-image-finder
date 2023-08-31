import { Component } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        inputValue: ''
    }

    handleChange = event => {  
        this.setState({inputValue: event.currentTarget.value.toLowerCase()});
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.inputValue.trim() === '') {
            return toast.error("Упс! Я не знаю що шукати.", {autoClose: 2000});
        }
        this.props.onSubmit(this.state.inputValue);
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
                                <IconContext.Provider value={{ color: "black", size: "25px" }}>
                                    <AiOutlineSearch />
                                </IconContext.Provider>                                
                        </button>                 
                    <input
                        className={css.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.inputValue}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}