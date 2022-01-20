import React from "react";
import ExploreBlogCard from "./explore-blog-cards";


function ExploreBlogs(){
    return <div>
        <ExploreBlogCard
                imgURL="assets/img/blog/blog-1.jpg"
                title="Noodles"
                writerName="John Doe"
                blogDate="Jan 1, 2020"
                totalComments="12 Comments"
                description="Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore."
                blogLink="explore/blogSingle"

             />
             <ExploreBlogCard
                imgURL="assets/img/blog/blog-2.jpg"
                title="Gajar ka Halwa"
                writerName="John Doe"
                blogDate="Jan 1, 2020"
                totalComments="12 Comments"
                description="Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore."
                blogLink="explore/blogSingle"

             />
              <ExploreBlogCard
                imgURL="assets/img/blog/blog-3.jpg"
                title="Smoothy"
                writerName="John Doe"
                blogDate="Jan 1, 2020"
                totalComments="12 Comments"
                description="Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore."
                blogLink="explore/blogSingle"

             />
    </div>
}

export default ExploreBlogs;