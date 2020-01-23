import React from 'react';

function Todo(props) {
  return (
    <div className={props.todo.completed ? 'Todo complete' : 'Todo incomplete'}>
     <p>{props.todo.title}</p>
    </div>
  );
}

export default Todo;