var express = require("express");
var router = express.Router();

const sampleBlogs = [
  {
    title: "dicta",
    text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
    author: "Darren Abbott",
    category: ["Lorem", "sit", "amet"],
    createdAt: "2022-03-22T10:36:37.176Z",
    lastModified: "2022-03-22T10:36:37.176Z",
  },
  {
    title: "ducimus",
    text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
    author: "Luke Rogahn PhD",
    category: ["Lorem", "ipsum"],
    createdAt: "2022-03-22T15:16:56.285Z",
    lastModified: "2022-03-22T15:16:56.285Z",
  },
  {
    title: "quod",
    text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
    author: "Maryann Schneider",
    category: ["Lorem", "ipsum", "dolor", "sit", "amet"],
    createdAt: "2022-03-21T20:09:32.298Z",
    lastModified: "2022-03-21T20:09:32.298Z",
  },
  {
    title: "ut",
    text: "Itaque necessitatibus repudiandae. Porro suscipit exercitationem qui atque. Perferendis suscipit debitis sint aut dignissimos nobis ut. Modi ea nihil est vel consequuntur voluptatem. In magnam delectus in eos reiciendis sit est enim eligendi. Sint dicta at.\n \rConsectetur aspernatur alias sed non explicabo blanditiis laborum fugit voluptate. Reiciendis iste aut sit natus qui et in ratione. Placeat qui in voluptatum autem nulla ratione. Commodi sit alias sint sapiente rem. Quia sapiente minus deleniti vitae.\n \rExercitationem numquam omnis maxime dolorum sed deserunt suscipit laudantium. Ad et autem voluptatem esse laudantium et. Id fuga accusamus est sapiente dicta.",
    author: "Dr. Lorenzo Anderson",
    category: ["ipsum", "dolor", "sit", "amet"],
    createdAt: "2022-03-21T23:07:53.447Z",
    lastModified: "2022-03-21T23:07:53.447Z",
  },
  {
    title: "id",
    text: "Porro officia aliquid fugiat sed reprehenderit illo amet doloribus sed. Molestiae vero et. Quae voluptates dolores. Voluptatem facere fuga. Veniam perferendis illo ut sunt earum deleniti.\n \rIusto neque dolorem esse error. Saepe et quia ut corrupti. Autem repellendus similique dolorem sunt in ipsa perferendis. Et excepturi ut voluptatem deserunt accusantium dolores aperiam cum ut.\n \rDoloremque expedita sit et voluptatem unde libero. Numquam beatae sed repellat iusto doloribus fugit tenetur. Possimus et ut adipisci harum voluptatem provident consequatur. Corporis quo aut vel itaque blanditiis illum.",
    author: "Bobbie Dach",
    category: ["amet"],
    createdAt: "2022-03-22T15:14:39.819Z",
    lastModified: "2022-03-22T15:14:39.819Z",
  },
];

/* GET blogs default */
router.get("/", function (req, res, next) {
  res.json({
    success: true,
    route: "blogs",
    message: "hello from the blogs default route",
  });
});

//////////////////////////////////////////////////////

router.get("/all", function (req, res, next) {
  res.json({
    success: true,
    route: "blogs",
    blogs: sampleBlogs,
    message: "HEY! This is the /blogs/all route!",
  });
});

/////////////////////////////////////////////////////////////

// send a single blog from the sample blogs in the HTTP response based upon the blog title passed into the url
// this uses the same format as the expressintro project
router.get("/single/:blogTitleToGet", function (req, res, next) {
  const blogTitleToGet = req.params.blogTitleToGet;

  const foundBlogIndex = sampleBlogs.findIndex((blog) => {
    if (blog.title === req.params.blogTitleToGet) {
      console.log("Blog titles match!");
      return true;
    } else {
      console.log("Blog titles do not match!");
      return false;
    }
  });

  const foundBlog = sampleBlogs[foundBlogIndex];

  res.json({
    success: true,
    route: "blogs",
    blogs: foundBlog,
  });
});

//////////////////////////////////
// delete route
////////////////////////////////////

router.delete("/single/:blogTitleToDelete", (req, res) => {
  console.log("DELETE to /delete-movie");

  // find the index of the movie in the movie list
  const indexOfBlog = sampleBlogs.findIndex((blog) => {
    if (blog.title === req.params.blogTitleToDelete) {
      console.log("Blog titles match!");
      return true;
    } else {
      console.log("Blog titles do not match!");
      return false;
    }
  });

  console.log(indexOfBlog);

  if (indexOfBlog < 0) {
    res.json({
      hasBeenDeleted: false,
    });
    return;
  }

  console.log("Before Delete", sampleBlogs);
  // remove the movie title from the array of the index
  sampleBlogs.splice(indexOfBlog, 1);
  console.log("After delete", indexOfBlog);

  res.json({
    success: true,
  });
});

////////////////////////////////////////////

// postman requests completed for all new routes 

module.exports = router;
