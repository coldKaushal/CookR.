import React from "react";
import SearchBlogCard from "./search-blog-card";

function SearchResult(props){

    const itemList = props.itemList;
    const [resultList, updateResultList] = React.useState([]);

    function createResult(){
        return <SearchBlogCard />
    }
    
    return <div>
        {resultList.length>0? <h2>Recipes Found!</h2>: props.searchBtnClicked? <h2>Can't find any recipe</h2>: <h2>Add available ingredients and find recipe!!</h2>}
        {resultList.length>0? resultList.map(createResult): null}
    </div>
}



export default SearchResult;