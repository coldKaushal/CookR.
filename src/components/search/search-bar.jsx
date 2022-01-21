import React from "react";
//import { Searchbar } from 'react-native-paper';
import "../../css/searchbar-style.css";
import list from "./search-suggestion";




function SearchBar(props) {
    const [searchQuery, setSearchQuery] = React.useState("maida");



    function updateValue(event) {
        const newValue = event.target.value;
        setSearchQuery(newValue);
    }

    function showSuggestion(listItem, listIndex) {
        if (listItem.includes(searchQuery)) {
            return <li onClick={addNewItem} id={listIndex} key={listIndex} value={listItem}>
                {listItem}
            </li>
        } else {
            return null;
        }
    }


    function addNewItem(event){
        const itemID = event.target.id;
        return props.addItem(itemID);
    }


    return (
        <div class="search-bar">
            <input placeholder="Maida"
                onChange={updateValue}
                value={searchQuery}
            >
            </input>
            <span><i class="fas fa-search"></i></span>
            <div class="search-suggestion">
                <ul>
                    {list.map(showSuggestion)}
                </ul>
            </div>



        </div>
    );
}

export default SearchBar;