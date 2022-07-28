import React, { useState } from 'react';
import "../styles/AllPost.css"
import CreatePost from './CreatePost';
import Post from './Post';

export default function AllPost() {

    // TODO modificar para que se usen los servicios.

    const [isCreated, setIsCreated] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPost, setAllPost] = useState([]);

    const postTitle = event => {
        setTitle(event.target.value);
    }

    const postContent = event => {
        setContent(event.target.value);
    }
    
    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPost([...allPost, { id, title, content }])
        setTitle("");
        setContent("");
        onCreate();
    }

    const onCreate = () => {
        setIsCreated(!isCreated);
    }

    if (isCreated) {
        return (
            <div>
                <CreatePost postTitle={postTitle} 
                            postContent={postContent}
                            savePost={savePost}
                />
            </div>
        )
    } else {
        return (
            <div>
                <h2>Todos las Historias</h2>
                {allPost.map(post => (
                    <Post key={post.id}
                          id={post.id}  
                          title={post.title}
                          content={post.content} 
                    />
                ))}
                <button onClick={onCreate}>Agregar una historia</button>
            </div>
        )
    }

    
}