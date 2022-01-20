import React from "react";
//import { Searchbar } from 'react-native-paper';
import "../../css/searchbar-style.css";
import list from "./search-suggestion";




function SearchBar(){
    const [searchQuery, setSearchQuery] = React.useState("maida");

    function updateValue(event){
        const newValue = event.target.value;
        setSearchQuery(newValue);
    }

    function showSuggestion(listItem){
        if(listItem.includes(searchQuery)){
            return <li>
                {listItem}
            </li>
        }else{
            return null;
        }
    }

    return (
        <div>
            <input placeholder="Maida" 
                onChange = {updateValue}
                value={searchQuery}
            > 
            </input>
            <span><i class="fas fa-search"></i></span>
            <ul>
                {list.map(showSuggestion)}
            </ul>
            


        </div>
        );
}

export default SearchBar;