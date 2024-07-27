import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
 

const PostForm = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: '',
        content: '',
        file: null
    });

    const handleInput = (e) => {
        const { name, value, type, files } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, content, file } = input;

        if (!title || !content) {
            alert("Title and content are required");
            return;
        }

        const postData = new FormData();
        postData.append('title', title);
        postData.append('content', content);
        if (file) {
            postData.append('file', file);
        }

        dispatch(addPost(postData));
        setInput({
            title: '',
            content: '',
            file: null
        });
    };

    return (
        <div className="blog-body">
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-6 border rounded-4 p-3">
                        <h2>Add Post</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={input.title}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="file">File</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="file"
                                    id="file"
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    name="content"
                                    value={input.content}
                                    onChange={handleInput}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">Add Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostForm;
