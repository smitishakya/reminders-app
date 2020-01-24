import React from 'react';

function Todo(props) {
  return (
    <div
     className={props.todo.completed ? 'Todo complete' : 'Todo incomplete'}
     onClick = { e => props.toggleCompleted(props.index)}>
     <p>{props.todo.title}</p>
     <a href="/deleteTodo"
     className='del'
     onClick = {e => props.deleteTodo(e, props.index)}
     >X</a>
    </div>
  );
}

export default Todo;