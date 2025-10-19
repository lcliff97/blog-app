function PostList({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <h3>No posts yet</h3>
        <p>Be the first to create a post!</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          {post.category && (
            <span className="post-category">{post.category}</span>
          )}

          <h2>{post.title}</h2>

          <p className="post-content">{post.content}</p>

          <p className="post-date">Posted on {formatDate(post.created_at)}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
