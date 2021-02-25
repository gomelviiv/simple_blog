import { useState } from 'react'
import { Link } from 'react-router-dom'


import './AddForm.scss'

const AddForm = (
  {
    setTitle,
    setDescription,
    setImageUrl,
    setText,
    title,
    description,
    imageUrl,
    text,
    sendData
  }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      }
 
    return (
        <form className="add-form" onSubmit={handleSubmit.bind(this)}>
              <div className="form-group"> 
                <div className="add-form__row">
                  <h4>
                    <label for="title">Title</label>
                  </h4>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Enter title"
                  />
                </div>
                <div className="add-form__row">
                  <h4>
                    <label for="description">Description</label>
                  </h4>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    placeholder="Enter description"
                  />
                </div>
                <div className="add-form__row">
                  <h4>
                    <label for="image">Image URL</label>
                  </h4>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)}
                    placeholder="Enter emage URL"
                  />
                </div>
                <div className="add-form__row">
                  <h4>
                    <label for="text">Text</label>
                  </h4>
                  <textarea
                    rows="8"
                    className="form-control"
                    id="text"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Enter text"
                  />
                </div>
                <div className="btn-bottom">
                  <button type="submit" className="btn-add" onClick={() => sendData({title, imageUrl, description, text})}>Submit</button>
                  <Link to="/"><button type="submit" className="btn-add">Back</button></Link>
                </div>
              </div>
            </form>
    )
}

export default AddForm