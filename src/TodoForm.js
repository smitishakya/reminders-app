import React from 'react';

function TodoForm(props) {
  return (
    <div className='TodoForm'>
      <h2>Add things todo for today ...</h2>
      <form onSubmit = { e => props.addTodo(e)}>
          <input type='text'
          name='title'
          placeholder = 'Type stuffs to do..'
          aria-label = 'Todo title'
          />
          <input type='submit'
          name='submit'
          value='+'
          aria-label = 'submit'
          />
      </form>

    </div>
  );
}

export default TodoForm;
