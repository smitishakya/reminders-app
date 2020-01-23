import React from 'react';

function Todo(props) {
  return (
    <div className='Todo'>
     <p>{props.todo.title}</p>
    </div>
  );
}

export default Todo;