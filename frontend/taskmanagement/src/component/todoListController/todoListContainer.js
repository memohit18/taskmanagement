import React, { useState, useEffect, useRef } from 'react';

function TodoListContainer({ list }) {
  const [itemsToShow, setItemsToShow] = useState(5); // Number of items initially displayed
  const [filterStatus, setFilterStatus] = useState('All'); // Status filter
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current.scrollTop + containerRef.current.clientHeight >=
        containerRef.current.scrollHeight
      ) {
        // When the user reaches the bottom of the container, load more items
        setItemsToShow(prevItems => prevItems + 5); // Increase the number of items to display
      }
    };

    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    // Reset itemsToShow to 5 when applying filter
    setItemsToShow(5);
  };

  const filteredList = filterStatus === 'All' ? list : list.filter(item => item.status === filterStatus);

  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3">
        <select className="form-control mr-2" value={filterStatus} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div className="todo-list-container" ref={containerRef} style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <h2>Todo List:</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.slice(0, itemsToShow).map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoListContainer;
