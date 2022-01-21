import React from "react";
import SearchBar from "./search-bar";
import list from "./search-suggestion";

function SearchBody(){
    const [itemList, updateItemList] = React.useState([]);

    function addItem(item){
        const isPresent = itemList.find(existingItem =>{
            return existingItem==item;
        })
        if(isPresent){
            return null;
        }else{
            updateItemList(prevValue=> {
                return [...prevValue, item];
            })
        }
        
    }

    function removeItem(event){
        const id = Number(event.target.id);
        updateItemList(prevValue =>{
            const newItemList = prevValue.filter(existingValue=>{
                return existingValue!=id;
            })
            return newItemList;
        })
        
    }

    function createList(itemID){
        const id = Number(itemID);
        return (
            <div key={id}  onClick={removeItem}>
                <p>{list[id]}</p>
                <span ><i class="far fa-times-circle" id={id}></i></span>
            </div>
        );
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-3 ">
                    {itemList.map(createList)}
                </div>
                <div class="col-9" >
                    <SearchBar addItem={addItem}/>
                </div>
            </div>
        </div>

    );
}

export default SearchBody;