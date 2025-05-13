import { useEffect, useState } from "react";
import BlogHeader from "../Components/blog/BlogHeader";
import { getBlogs } from "../util/api";
import { LoadingSpinner } from "../Components/Loader";
import BlogItem from "../Components/blog/BlogItem";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getBlogs();
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="dark:bg-darkblack max-w-screen">
      <BlogHeader />
      <div className="wrapper pb-[3rem]">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : (
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {blogs.length > 0 ? (
              blogs.map((blog) => <BlogItem key={blog._id} item={blog} />)
            ) : (
              <div className="col-span-3 text-center text-2xl py-10 dark:text-white">
                No blogs found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
