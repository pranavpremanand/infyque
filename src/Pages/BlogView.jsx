import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RoundedHeader from "../Components/RoundedHeader";
import ViewBlogHeader from "../Components/blog/ViewBlogHeader";
import Faq from "../Components/Faq";
import { getBlogBySlug, getBlogs } from "../util/api";
import BlogItem from "../Components/blog/BlogItem";
import { LoadingSpinner } from "../Components/Loader";
import { format } from "date-fns";

function BlogView() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        // Fetch the specific blog by slug
        const blogResponse = await getBlogBySlug(slug);
        setBlog(blogResponse.data.blog);
        console.log("Blog data:", blogResponse.data.blog);

        // Fetch recent blogs
        const blogsResponse = await getBlogs();
        // Filter out the current blog and limit to 3 blogs
        const filteredBlogs = blogsResponse.data.blogs
          .filter((item) => item.slug !== slug)
          .slice(0, 3);
        setRecentBlogs(filteredBlogs);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog details:", err);
        setError("Failed to load blog details. Please try again later.");
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogData();
      // Scroll to top when blog changes
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="wrapper pt-[5rem] text-center text-red-500">
        {error || "Blog not found"}
      </div>
    );
  }

  return (
    <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen">
      <div className="relative max-w-5xl mx-auto px-4 space-y-10 pt-[7rem] pb-10 overflow-hidden">
        {/* Blog Header with all metadata */}
        <ViewBlogHeader blog={blog} />

        {/* Blog Content */}
        <div className="blog-content-container">
          <div
            className="reset-html-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="wrapper paddingtop">
        <div className="flex justify-center items-center flex-col">
          <RoundedHeader title={"Recent Posts"} />
          <h1 data-aos="fade-up" className="main-title my-3">
            Related Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 dark:bg-darkblack">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((post, index) => (
                <BlogItem key={index} item={post} passkey={true} />
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500 dark:text-gray-400 py-8">
                No related posts found
              </p>
            )}
          </div>
          <div className="text-center mt-4 mb-12">
            <Link
              to="/blogs"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              View All Blogs
            </Link>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
}

export default BlogView;
