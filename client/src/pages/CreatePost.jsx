import { useNavigate } from "react-router-dom";

import PostForm from "../components/PostForm";

function CreatePost() {
  const navigate = useNavigate();

  const handlePostCreated = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container">
      <PostForm onPostCreated={handlePostCreated} />
    </div>
  );
}

export default CreatePost;
