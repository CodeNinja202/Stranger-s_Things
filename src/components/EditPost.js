import  {React, useState } from 'react';
import {updatePost, deletePost, getPosts} from '../api'
import { useParams } from 'react-router-dom';





const EditPost = ({ posts, token,fetchPosts, navigate }) => {
    const { postID } = useParams();
  
    const [currentPost] = posts.filter(post => post._id === postID);
    
    const {title, description, location, price, willDeliver} = currentPost;


 const [newtitle, setNewTitle] = useState(title);
const [newdescription, setNewDescription] = useState(description);
const [newprice, setNewPrice] = useState(price);
const [newlocation, setNewLocation] = useState(location);
const [newwillDeliver, setNewWillDeliver] = useState(willDeliver);


async function editPost() {
    const updatedPost = {
        title: newtitle,
        description: newdescription,
        price: newprice,
        location: newlocation,
        willDeliver: newwillDeliver
    }
   
    
    await updatePost(token,updatedPost,postID)
    fetchPosts();
    navigate('/posts')
   
  
  }

  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <>
     <form  class='form' onSubmit={(event) => {
      event.preventDefault();
      editPost();
    
      window.location - '/posts'
    }}>
    <input 
      class="createPost"
        type='text'
        placeholder={title}
        onChange={(event) => setNewTitle(event.target.value)}
      />
       <input 
      class="createPost"
      id='description'
        type='text'
        placeholder={description}
        onChange={(event) => setNewDescription(event.target.value)}
      />
       <input 
      class="createPost"
        type='text'
        placeholder={price}
        onChange={(event) => setNewPrice(event.target.value)}
      />
       <input 
      class="createPost"
        type='text'
        placeholder={location}
        onChange={(event) => setNewLocation(event.target.value)}
      />
       <input 
      class="createPost"
        type='checkbox'
        checked={newwillDeliver}
        onChange={(event) => setNewWillDeliver(event.target.checked)}
      />
    <button type="submit">Edit Post</button>
    <button type="submit" onClick={() =>{
      deletePost(token,postID);
    }}>
      Delete
    </button>

    </form>
    </>
 
   )
}





export default EditPost;