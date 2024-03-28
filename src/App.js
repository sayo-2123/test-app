import logo from "./logo.svg";
import "./App.css";
import posts from "./data/posts.js";
import Header from "./header.js";

function App() {
  return (
    <>
      <Header />
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="postId">
            <div className="postHead">
              <div className="postCreatedAt">
                {new Date(post.createdAt).toLocaleDateString("ja-JP")}
              </div>
              <div className="postCategories">
                {post.categories.map((category, index) => (
                  <div key={index} className="postCategory">
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="postTitle">{post.title}</div>
            <div className="postContent">{post.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
