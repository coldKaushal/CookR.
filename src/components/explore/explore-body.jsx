import React from "react";
import "../../css/explore.css";

import ExploreBlogs from "./explore-blogs";
// import ExplorePagenation from "./explore-pagenation";
import ExploreSearchBars from "./explore-searchbars";


function ExploreBody() {
  const [name, updateName] = React.useState("");
  const [type, updateType] = React.useState("NA");
  const [time, updateTime] = React.useState("NA");
  const [difficulty, updateDifficulty] = React.useState("NA");

  function changeName(event) {
    const newValue = event.target.value;
    updateName(newValue);
  }
  function changeType(event) {
    const newType = event.target.value;
    updateType(newType);
  }
  function changeTime(event) {
    const newTime = event.target.value;
    updateTime(newTime);
  }
  function changeDifficulty(event) {
    const newDifficulty = event.target.value;
    updateDifficulty(newDifficulty);
  }

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
      />
    </div>
  </section>
}

export default ExploreBody;