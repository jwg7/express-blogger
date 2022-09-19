const validateBlogData = (newBlog) => {
  console.log(newBlog);

  if (newBlog.title === undefined || typeof newBlog.title !== "string" || newBlog.title.length > 40) {
    return {
      isValid: false,
      message: "Title is required. It must be a string and less than 40 characters.",
    };
  }

  if (newBlog.text === undefined || typeof newBlog.text !== "string") {
    return {
      isValid: false,
      message: "Text is required and it must be a string.",
    };
  }

  if (newBlog.author === undefined || typeof newBlog.author !== "string" || newBlog.author.length > 40) {
    return {
      isValid: false,
      message: "Author is required. It must be a string and less than 40 characters.",
    };
  }

  return {
    isValid: true,
  };
};

module.exports = {
  validateBlogData,
};
