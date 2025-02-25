import React, { useState } from 'react';

const CommentSection = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="mt-8">
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
        className="w-full p-2 border rounded-lg mt-4"
      />
      <button onClick={handleAddComment} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Add Comment</button>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <p key={index} className="border-t pt-2">{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
