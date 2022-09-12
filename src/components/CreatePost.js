import React, {useState} from "react";
import {createPost} from '../api';
const Createpost = ( { token, fetchPosts, navigate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver,
  }
  async function addPost() {
    const results = await createPost(token, newPost);
    fetchPosts();
    navigate(`/posts`)
  }
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        addPost();
      }}>
        <input
          type='text'
          placeholder="Title*"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='text'
          placeholder="Description*"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type='text'
          placeholder="Price*"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          type='text'
          placeholder="Location*"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label>Will Deliver</label>
        <input
          type='checkbox'
          placeholder="Will Deliver*"
          checked={willDeliver}
          onChange={(event) => setWillDeliver(!willDeliver)}
        />
        <button onClick={(event) => {
          event.preventDefault();
          addPost();
      
         }}>Create a New Post</button>
      </form>
  )}
  export default Createpost;