// import React, { useState } from 'react';
// // import LoginSignupForm from '../LoginSignUP/LoginSignupForm';
// import './Comments.css';

// const Comments = ({ comments, addComment }) => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(true);
//   // const [showLogin, setShowLogin] = useState(true);
//   const [commentText, setCommentText] = useState('');

//   // const handleLogin = (user) => {
//   //   // setIsLoggedIn(true);
//   //   // setShowLogin(true);
//   //   console.log(`User ${user} logged in`);
//   // };

//   const handleAddComment = () => {
//     // if (!isLoggedIn) {
//     //   setShowLogin(true);
//     // } else {
//       addComment(commentText);
//       setCommentText('');
//     // }
//   };

//   return (
//     <div className="comments-section">
//       <h3>Comments</h3>
//       <div className="comments-list">
//         {comments.map((comment, index) => (
//           <div key={index} className="comment">
//             <strong>{comment.user}</strong>
//             <p>{comment.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="add-comment">
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           placeholder="Add your comment..."
//         ></textarea>
//         <button onClick={handleAddComment}>Submit</button>
//       </div>
//       {/* {showLogin && <LoginSignupForm onClose={() => setShowLogin(false)} onLogin={handleLogin} />} */}
//     </div>
//   );
// };

// export default Comments;


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
//       const commentObject = {
//         text: newComment,
//         author: 'Anonymous',
//         timestamp: new Date().toLocaleString(),
//       };
//       setComments([...comments, commentObject]);
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
//             <div className="comment-header">
//               <span className="comment-author">{comment.author}</span>
//               <span className="comment-timestamp">{comment.timestamp}</span>
//             </div>
//             <p className="comment-text">{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Comments;
import React, { useState } from 'react';
import './Comments.css';

const Comments = () => {
  const [comments, setComments] = useState([
    "This is a great blog post! Really enjoyed reading it."
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
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
        <button type="submit" className="submit-comment-btn">Post Comment</button>
      </form>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <div className="comment-avatar">
              <img src={`https://i.pravatar.cc/50?img=${index + 1}`} alt="avatar" />
            </div>
            <div className="comment-content">
              <p className="comment-text">{comment}</p>
              <p className="comment-author">Anonymous User</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
