import React from "react";

function ExploreBlogCard(props){
    return (
      <div className="col-lg-4 col-md-6">
        <div className="container blog-entry" key={props.id}>
        <img src="https://content3.jdmagicbox.com/comp/allahabad/q5/0532px532.x532.181115190131.z9q5/catalogue/food-square-katra-allahabad-restaurants-klhq6ijf66.jpg" />
        <div className="blog-title">
          <h4>{props.title}</h4>
          <div className="likes">
          <p>{props.likes}</p>
          <i class="fas fa-heart"></i>
         
          </div>
        </div>
        <div className="blog-info">
          <i className="fas fa-stopwatch"></i>
          <p>{props.time}</p>
        </div><div className="blog-info">
        <i class="fas fa-comments"></i>
          <p>{props.comments} comments</p>
        </div>
        <div className="blog-info">
        <i class="fas fa-trophy"></i>
          <p>{props.difficulty}</p>
        </div>
        <div className="blog-info">
        
          <p>{props.type}</p>
        </div>
        <button className="btn">View</button>
      </div>
      </div>
  );
}


export default ExploreBlogCard;