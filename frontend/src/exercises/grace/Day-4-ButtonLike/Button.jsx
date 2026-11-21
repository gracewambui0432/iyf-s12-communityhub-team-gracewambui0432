import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLikes(likes + 1);
    setLiked(!liked);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleClick} style={{ fontSize: "20px", background: liked ? "#FF4081" : "white", padding: "10px 25px", borderRadius: "30px", border: "2px solid #FF4081", cursor: "pointer" }}>
        {liked ? "❤️ Loved!" : "🤍 Like"} - {likes}
      </button>
      <p>You have {likes} likes!</p>
    </div>
  );
}

export default LikeButton;
