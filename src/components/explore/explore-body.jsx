import React from "react";
import ExploreBlogs from "./explore-blogs";
import ExplorePagenation from "./explore-pagenation";
import ExploreSidebar from "./explore-sidebar";


function ExploreBody(){
    return <section id="blog" class="blog">
    <div class="container" data-aos="fade-up">

      <div class="row">
        
        <div class="col-lg-8 entries">
        <ExploreBlogs />
        <ExplorePagenation />
        </div>

        <div class="col-lg-4">

          <ExploreSidebar />

        </div>

      </div>

    </div>
  </section>
}

export default ExploreBody;