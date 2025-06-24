
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Preview = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/.netlify/functions/get-preview?id=${id}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      const post = await response.json();
      setTitle(post.title);
      setContent(post.content);
      if (titleRef.current) titleRef.current.textContent = post.title;
      if (contentRef.current) contentRef.current.innerHTML = post.content;
    } catch (error) {
      setStatus(`Error loading post: ${error.message}`);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setStatus(isEditing ? '' : 'Editing enabled. Make changes and save.');
  };

  const updateTitle = () => setTitle(titleRef.current.textContent);
  const updateContent = () => setContent(contentRef.current.innerHTML);

  const saveChanges = async () => {
    try {
      const response = await fetch('/.netlify/functions/save-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, title, content }),
      });
      if (!response.ok) throw new Error('Failed to save changes');
      setIsEditing(false);
      setStatus('Changes saved successfully!');
    } catch (error) {
      setStatus(`Error saving changes: ${error.message}`);
    }
  };

  const approvePost = async () => {
    try {
      const response = await fetch('/.netlify/functions/approve-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error('Failed to approve post');
      setStatus('Post approved and published!');
      setIsApproved(true);
    } catch (error) {
      setStatus(`Error approving post: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Post Preview</h1>
      <div className="bg-white p-6 rounded shadow">
        <h2
          ref={titleRef}
          className="text-2xl font-semibold"
          contentEditable={isEditing}
          onInput={updateTitle}
        ></h2>
        <div
          ref={contentRef}
          className="mt-4 prose"
          contentEditable={isEditing}
          onInput={updateContent}
        ></div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={toggleEdit}
          className={`px-4 py-2 rounded ${isEditing ? 'bg-gray-500' : 'bg-blue-500'} text-white`}
        >
          {isEditing ? 'Cancel Edit' : 'Edit'}
        </button>
        {isEditing && (
          <button
            onClick={saveChanges}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        )}
        <button
          onClick={approvePost}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          disabled={isApproved}
        >
          Approve
        </button>
      </div>
      <p className="mt-4 text-gray-600">{status}</p>
    </div>
  );
};

export default Preview;
