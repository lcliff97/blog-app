import { useState, useEffect } from "react";

import PostList from "../components/PostList";

function Home() {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();

      setPosts(data);

      setError(null);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();

    const intervalId = setInterval(() => {
      fetchPosts();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
        <button onClick={fetchPosts}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>All Posts</h1>

      <PostList posts={posts} />
    </div>
  );
}

export default Home;
