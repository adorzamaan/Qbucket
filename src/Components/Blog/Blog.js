import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="container mx-auto justify-center">
      <h3 className="font-bold py-4 text-2xl">Our Blog Page</h3>
      <div className="justify-center grid lg:grid-cols-3 sm:grid-cols-1 gap-12 pt-5">
        {blogs.map((blog) => (
          <div className="card  bg-purple-800 text-white py-3 text-start px-3 rounded-md shadow-sm">
            <div className="card-body">
              <h2 className="pt-3 card-title font-bold">{blog.titl}</h2>
              <p style={{ fontSize: "14px", margin: "10px 0px" }}>
                {blog.description}
              </p>
              <div className="justify-start">
                <button className="border px-4 py-1 bg-white text-black my-4">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
