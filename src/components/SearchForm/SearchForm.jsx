import { Form, SearchFormBtn, SearchFormBtnlabel, SearchFormInput } from "./SearchForm.styled";

export const SearchForm = () => {
    return (<Form>
        <SearchFormBtn type="submit">
            <SearchFormBtnlabel>Search</SearchFormBtnlabel>
        </SearchFormBtn>

        <SearchFormInput
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
        />
    </Form>)
};