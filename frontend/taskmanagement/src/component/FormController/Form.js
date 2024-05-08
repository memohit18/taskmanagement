import React, { useState } from 'react';

const statusOptions = ['To Do', 'In Progress', 'Done'];

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('All');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('All');
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <div class="form-group row">
          <label htmlFor="title" class="col-sm-2 col-form-label" >Title: </label>
          <div class="col-sm-10">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              class="form-control"
              placeholder="Title"
              required
            />
          </div>

        </div>
        <div class="form-group row">
          <label htmlFor="description" class="col-sm-2 col-form-label" >Description:</label>
          <div class="col-sm-10">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              class="form-control"
              placeholder="Description"
            />
          </div>
        </div>

        <div class="form-group row" >
          <label htmlFor="status" class="col-sm-2 col-form-label">Status:</label>
          <div class="col-sm-10">
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-control"
              required
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

        </div>
        <div class="form-group row">
          <div class="col-sm-2 ">
            <button type="submit"  className="btn btn-primary mb-2">Submit</button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default TaskForm;
