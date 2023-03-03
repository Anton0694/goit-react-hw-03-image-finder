import { SearchBar, Form, SearchFormBtn, SearchFormInput } from "./Searchbar.styled";
import { ImSearch as IconSearch } from "react-icons/im"
import { Component } from "react";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


export class Searchbar extends Component {      
    

    render() {
        return (
        
        <SearchBar>
                <Form onSubmit={this.props.onHandleSubmit}>
                    
                <SearchFormBtn type="submit">
                        <IconSearch size='2em' />
                        
                </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        name="name"
                        onChange={this.handleInputChange}
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                       
                        
                />
                </Form>
                
        </SearchBar>
    )
    }
    
}
    

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

    

