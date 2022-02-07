import React from "react";
import "../../css/explore.css";

import ExploreBlogs from "./explore-blogs";
import ExploreSearchBars from "./explore-searchbars";
import Pagination from '@mui/material/Pagination';

function ExploreBody() {
  const [name, updateName] = React.useState("");
  const [type, updateType] = React.useState("NA");
  const [time, updateTime] = React.useState("NA");
  const [difficulty, updateDifficulty] = React.useState("NA");
  const [index, updateIndex] = React.useState(1);
  function changeName(event) {
    const newValue = event.target.value;
    updateName(newValue);
    updateIndex(1);
  }
  function changeType(event) {
    const newType = event.target.value;
    updateType(newType);
    updateIndex(1);
  }
  function changeTime(event) {
    const newTime = event.target.value;
    updateTime(newTime);
    updateIndex(1);
  }
  function changeDifficulty(event) {
    const newDifficulty = event.target.value;
    updateDifficulty(newDifficulty);
    updateIndex(1);
  }
  function changeIndex(event, newValue){
    updateIndex(newValue)
  }
  console.log(index);
  return <section id="blog" className="blog">
    <div className="container explore-body" data-aos="fade-up">
      <ExploreSearchBars
        name={name} changeName={changeName}
        changeType={changeType}
        changeTime={changeTime}
        changeDifficulty={changeDifficulty}
      />
      <ExploreBlogs name={name}
        type={type}
        time={time}
        difficulty={difficulty}
        index = {index}
      />
     <Pagination count={10} variant="outlined" shape="rounded" color="secondary"
      page={index}
       onChange={changeIndex}
     />
    </div>
  </section>
}

export default ExploreBody;