import React from "react";
import tableItems from "../../new_data.json";

function YourRecipe(){


    const [lastItemIndex, updateLastItemIndex] = React.useState(4);
    const [items, updateItems ] = React.useState(tableItems.slice(0, lastItemIndex));

    function TableContent(item) {
        return <tr key={item.id} className="table-item">
            <td>&emsp;{item.title}</td>
            <td>{item.time} mins</td>
            <td>{item.difficulty}</td>
            <td>{item.likes}</td>
            <td>{item.comments}</td>
            <td className="table-icon" ><i className="fas fa-pencil-alt"></i></td>
            <td>&emsp;</td>
        </tr>
    }



    return <div className="your-recipe">
        <div className="container wrapper" >
        
            <h4>Your Recipe</h4><i class="fas fa-plus"></i>
        </div>


        <div className="container workspace-container">
            <table className="table table-borderless workspace-table ">
                <div className="container table-container">
                <thead>
                    <tr>
                        <th scope="col" className="col-md-8">&emsp; Name</th>
                        <th scope="col" className="col-md-1"><i className="fas fa-stopwatch"></i></th>
                        <th scope="col" className="col-md-1">Level</th>
                        <th scope="col" className="col-md-1"><i class="fas fa-heart"></i></th>
                        <th scope="col" className="col-md-1"><i class="fas fa-comments"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(TableContent)}
                </tbody>
                </div>
            </table>
            <center><button type="button" class="btn btn-outline-primary">View All</button></center>
        </div>

    </div>
}

export default YourRecipe;