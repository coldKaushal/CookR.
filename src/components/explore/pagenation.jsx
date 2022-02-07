import React from "react";

function Pagenation(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [props.index])

    return <div className="container">
        <nav aria-label="Page navigation example ">
            <ul class="pagination">
                {props.index>1?<li class="page-item"><a class="page-link" onClick={() => props.changeIndex(props.index - 1)} >Previous</a></li>:null}

                <li class="page-item"><a class="page-link" onClick={() => props.changeIndex(props.index + 1)}>Next</a></li>
            </ul>
        </nav>
    </div>

}


export default Pagenation