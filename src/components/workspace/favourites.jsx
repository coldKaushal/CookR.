import React from "react";
import "../../css/workspace.css";
import tableItems from "./data.js";



function Favourite() {
    const [items, updateItems ] = React.useState(tableItems);
    function deleteItem(id){
        console.log("pressed");
        updateItems(prev =>{
            const newItems = items.filter((item) => item.id!=id);
            console.log(newItems);
            return newItems;
        });
    }

    function TableContent(item) {
        return <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.time} mins</td>
            <td>{item.difficulty}</td>
            <td className="table-icon" ><i className="fas fa-trash-alt" onClick={()=>deleteItem(item.id)}></i></td>
        </tr>
    }



    return <div className="favourites">
        <div className="container wrapper" >
            <h4>Favourites</h4><span><i className="fas fa-star"></i></span>
        </div>


        <div className="container">
            <table className="table table-borderless workspace-table ">
                <thead>
                    <tr>
                        <th scope="col" className="col-md-8">Name</th>
                        <th scope="col" className="col-md-2"><i className="fas fa-stopwatch"></i></th>
                        <th scope="col" className="col-md-2">Level</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(TableContent)}
                </tbody>
            </table>
        </div>

    </div>
}

export default Favourite;