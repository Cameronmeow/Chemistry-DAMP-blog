/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// // import React, { useState } from 'react';
// // // import LoginSignupForm from '../LoginSignUP/LoginSignupForm';
// // import './Comments.css';

// // const Comments = ({ comments, addComment }) => {
// //   // const [isLoggedIn, setIsLoggedIn] = useState(true);
// //   // const [showLogin, setShowLogin] = useState(true);
// //   const [commentText, setCommentText] = useState('');

// //   // const handleLogin = (user) => {
// //   //   // setIsLoggedIn(true);
// //   //   // setShowLogin(true);
// //   //   console.log(`User ${user} logged in`);
// //   // };

// //   const handleAddComment = () => {
// //     // if (!isLoggedIn) {
// //     //   setShowLogin(true);
// //     // } else {
// //       addComment(commentText);
// //       setCommentText('');
// //     // }
// //   };

// //   return (
// //     <div className="comments-section">
// //       <h3>Comments</h3>
// //       <div className="comments-list">
// //         {comments.map((comment, index) => (
// //           <div key={index} className="comment">
// //             <strong>{comment.user}</strong>
// //             <p>{comment.text}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="add-comment">
// //         <textarea
// //           value={commentText}
// //           onChange={(e) => setCommentText(e.target.value)}
// //           placeholder="Add your comment..."
// //         ></textarea>
// //         <button onClick={handleAddComment}>Submit</button>
// //       </div>
// //       {/* {showLogin && <LoginSignupForm onClose={() => setShowLogin(false)} onLogin={handleLogin} />} */}
// //     </div>
// //   );
// // };

// // export default Comments;


// // import React, { useState } from 'react';
// // import './Comments.css';

// // const Comments = () => {
// //   const [comments, setComments] = useState([
// //     "This is a great blog post! Really enjoyed reading it."
// //   ]);
// //   const [newComment, setNewComment] = useState('');

// //   const handleCommentSubmit = (e) => {
// //     e.preventDefault();

// //     if (newComment.trim() !== '') {
// //       const commentObject = {
// //         text: newComment,
// //         author: 'Anonymous',
// //         timestamp: new Date().toLocaleString(),
// //       };
// //       setComments([...comments, commentObject]);
// //       setNewComment('');
// //     }
// //   };

// //   return (
// //     <div className="comments-section">
// //       <h3 className="comments-title">Comments</h3>
// //       <form onSubmit={handleCommentSubmit} className="comments-form">
// //         <textarea
// //           value={newComment}
// //           onChange={(e) => setNewComment(e.target.value)}
// //           placeholder="Add your comment..."
// //           rows="4"
// //           className="comment-input"
// //         ></textarea>
// //         <button type="submit" className="submit-comment-btn">Post Comment</button>
// //       </form>
// //       <div className="comments-list">
// //         {comments.map((comment, index) => (
// //           <div key={index} className="comment-item">
// //             <div className="comment-header">
// //               <span className="comment-author">{comment.author}</span>
// //               <span className="comment-timestamp">{comment.timestamp}</span>
// //             </div>
// //             <p className="comment-text">{comment.text}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Comments;
// import React, { useState } from 'react';
// import './Comments.css';

// const Comments = () => {
//   const [comments, setComments] = useState([
//     "This is a great blog post! Really enjoyed reading it."
//   ]);
//   const [newComment, setNewComment] = useState('');

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();

//     if (newComment.trim() !== '') {
//       setComments([...comments, newComment]);
//       setNewComment('');
//     }
//   };

//   return (
//     <div className="comments-section">
//       <h3 className="comments-title">Comments</h3>
//       <form onSubmit={handleCommentSubmit} className="comments-form">
//         <textarea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add your comment..."
//           rows="4"
//           className="comment-input"
//         ></textarea>
//         <button type="submit" className="submit-comment-btn">Post Comment</button>
//       </form>
//       <div className="comments-list">
//         {comments.map((comment, index) => (
//           <div key={index} className="comment-item">
//             <div className="comment-avatar">
//               <img src={`https://i.pravatar.cc/50?img=${index + 1}`} alt="avatar" />
//             </div>
//             <div className="comment-content">
//               <p className="comment-text">{comment}</p>
//               <p className="comment-author">Anonymous User</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Comments;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Comments.css";

// const Comments = ({ blogId, user }) => {
const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [editText, setEditText] = useState("");

  // Fetch user details from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const token = localStorage.getItem("token") || null;
  // console.log(token);

  useEffect(() => {
    // Fetch comments for the specific blog
    axios
      .get(`http://127.0.0.1:8080/api/comments/${blogId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, [blogId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() !== "") {
      const commentObject = {
        text: newComment,
        author: user ? user.fullname : "Anonymous",
        timestamp: new Date().toISOString(),
      };

      axios
        .post("http://127.0.0.1:8080/api/comments", commentObject, {
          // headers: { Authorization: `Bearer ${user.token}` },
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setComments([...comments, response.data]);
          setNewComment("");
        })
        .catch((error) => console.error("Error posting comment:", error));
    }
  };

  const handleEdit = (comment) => {
    setEditingComment(comment._id);
    setEditText(comment.text);
  };

  const handleUpdate = (commentId) => {
    axios
      .put(
        `http://127.0.0.1:8080/api/comments/${commentId}`,
        { text: editText },
        {
          // headers: { Authorization: `Bearer ${user.token}` },
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setComments(
          comments.map((comment) =>
            comment._id === commentId ? response.data : comment
          )
        );
        setEditingComment(null);
      })
      .catch((error) => console.error("Error updating comment:", error));
  };

  const handleDelete = (commentId) => {
    axios
      .delete(`http://127.0.0.1:8080/api/comments/${commentId}`, {
        // headers: { Authorization: `Bearer ${user.token}` },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setComments(comments.filter((comment) => comment._id !== commentId));
      })
      .catch((error) => console.error("Error deleting comment:", error));
  };

  return (
    <div className="comments-section">
      <h3 className="comments-title">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="comments-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment..."
          rows="4"
          className="comment-input"
        ></textarea>
        <button type="submit" className="submit-comment-btn">
          Post Comment
        </button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment._id} className="comment-item">
            <div className="comment-avatar">
              <img
                src={`https://i.pravatar.cc/50?img=${comment._id}`}
                alt="avatar"
              />
            </div>
            <div className="comment-content">
              {editingComment === comment._id ? (
                <>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows="2"
                    className="comment-edit-input"
                  ></textarea>
                  <button
                    onClick={() => handleUpdate(comment._id)}
                    className="submit-edit-btn"
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <p className="comment-text">{comment.text}</p>
                  <p className="comment-author">{comment.author}</p>
                  <span className="comment-timestamp">
                    {new Date(comment.timestamp).toLocaleString()}
                  </span>
                  {user && (
                    <>
                      <button
                        onClick={() => handleEdit(comment)}
                        className="edit-comment-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(comment._id)}
                        className="delete-comment-btn"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
