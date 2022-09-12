import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createMessage, deletePost } from "../api";
const SendMessage = ({ postID, token, navigate }) => {
  const [message, setMessage] = useState({ content: "" });
  async function addMessage() {
    await createMessage({ postID, message, token });
  }
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        addMessage();
        navigate("/post");
      }}
    >
      <input
        type="text"
        placeholder="Enter Message"
        onChange={(ev) => setMessage({ content: ev.target.value })}
      />
      <button
        type="submit"
        onClick={() => {
          addMessage();
          navigate("/posts");
        }}
      >
        SendMessage
      </button>
    </form>
  );
};
const SinglePostView = ({ posts, token, navigate, getMe }) => {
  const [activeMessage, setActiveMessage] = useState(false);
  const { postID } = useParams();
  if (posts.length) {
    const [currentPost] = posts.filter((posts) => posts._id === postID);
    const {
      title,
      description,
      location,
      price,
      willDeliver,
      updatedAt,
      createdAt,
      isAuthor,
    } = currentPost;
    return (
      <div>
        <div>
          <h3>{title}</h3>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Location: {location}</p>
          <p>Will Deliver: {willDeliver}</p>
        </div>
        {isAuthor ? (
          <>
            <Link to={`/posts`}>
              <button>View All</button>
            </Link>
            <Link to={`/posts`}>
              <button onClick={() => deletePost(token, postID)}>Delete</button>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/posts`}>
              <button>View All</button>
            </Link>
            {token && (
              <>
                <button onClick={() => setActiveMessage(!activeMessage)}>
                  Message this user
                </button>
                {activeMessage && (
                  <SendMessage
                    token={token}
                    postID={postID}
                    navigate={navigate}
                    getMe={getMe}
                  />
                )}
              </>
            )}
          </>
        )}
        <div>
          <p className="singlePostStamp">Created At: {createdAt}</p>
          <p className="singlePostStamp">Updated At: {updatedAt}</p>
        </div>
      </div>
    );
  } else {
    return <h1>Waiting for Posts...</h1>;
  }
};
export default SinglePostView;