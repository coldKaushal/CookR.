import react from "react";

function ExploreSidebar(){
    return <div class="sidebar">

    <h3 class="sidebar-title">Search</h3>
    <div class="sidebar-item search-form">
      <form action="">
        <input type="text" />
        <button type="submit"><i class="bi bi-search" ></i></button>
      </form>
    </div>

    <h3 class="sidebar-title">Categories</h3>
    <div class="sidebar-item categories">
      <ul>
        <li><a href="#">Most Popular <span>(25)</span></a></li>
        <li><a href="#">Easy to make <span>(12)</span></a></li>
        <li><a href="#">Sugar Free <span>(5)</span></a></li>
        <li><a href="#">Snacks <span>(22)</span></a></li>
        <li><a href="#">Sugar Free  <span>(8)</span></a></li>
        <li><a href="#">Dairy <span>(14)</span></a></li>
      </ul>
    </div>

    <h3 class="sidebar-title">Tags</h3>
    <div class="sidebar-item tags">
      <ul>
        <li><a href="#">Sugar Free </a></li>
        <li><a href="#">Low Calories</a></li>
        <li><a href="#">Oil Free</a></li>
      </ul>
    </div>

  </div>
}

export default ExploreSidebar;