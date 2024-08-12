import React from 'react';

const EditNewsModal = ({ article, onClose, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedArticle = {
      ...article,
      title: e.target.title.value,
      content: e.target.content.value,
    };
    onSave(updatedArticle);
  };

  return (
    <div className="modal1">
      <div className="modal-content1">
        <span className="close-button1" onClick={onClose}>×</span>
        <form  className='edit' onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" defaultValue={article.title} />
          
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" defaultValue={article.content}></textarea>
          
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditNewsModal;
