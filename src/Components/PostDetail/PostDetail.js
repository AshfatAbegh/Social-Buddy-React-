import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
     const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
     fetch(url)
     .then(res => res.json())
     .then(data => setPost(data));
    }, [])

    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/comments/${comments}`;
      fetch(url)
     .then(res => res.json())
     .then(data => setComments(data));
    }, [])

    return (
        <div>
            <h3>This is Post Detail: {id}</h3>
            <p>User Posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <p>Number of Comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment = {comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;