import React from "react";

function ExploreBlogCard(props){
    return (
    <article class="entry">

    <div class="entry-img">
      <img src={props.imgURL} alt="" class="img-fluid"/>
    </div>

    <h2 class="entry-title">
      <a href="blog-single.html">{props.title}</a>
    </h2>

    <div class="entry-meta">
      <ul>
        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">{props.writerName}</a></li>
        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{props.blogDate}</time></a></li>
        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">{props.totalComments}</a></li>
      </ul>
    </div>

    <div class="entry-content">
      <p>
        {props.description}      
        </p>
      <div class="read-more">
        <a href={props.blogLink}>Read More</a>
      </div>
    </div>

  </article>
  );
}


export default ExploreBlogCard;