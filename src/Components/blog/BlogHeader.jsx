import React from "react";
import { useTheme } from "../../Context/ThemeContext";

function BlogHeader() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="relative pt-[7rem] bg-white dark:bg-darkblack overflow-hidden">
      <div
        className={`absolute flex -top-[18rem] blur-3xl left-0 w-full h-full ${
          isDarkMode ? 'bg-footerBackground' : 'bg-footerBackgroundLight'
        }`}
      />
      <header className="wrapper flex justify-center items-center flex-col text-center py-10 bg-white dark:bg-darkblack dark:text-white">
        <div
          className="bg-white dark:text-black rounded-full py-2 px-6  shadow-md text-lg font-medium"
          data-aos="fade-up"
        >
          Latest Blogs
        </div>
        <div className="my-8">
          <h1 className="text-3xl font-semibold mb-2" data-aos="fade-up">
            Explore Latest Blog Posts
          </h1>
          <p className="text-gray-600 dark:text-white mb-5" data-aos="fade-up">
            Specialising in crafting visually stunning and highly functional
            user interfaces.
          </p>
        </div>
      </header>
    </div>
  );
}

export default BlogHeader;
