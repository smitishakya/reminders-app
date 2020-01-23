import React from 'react';
import Todo from './Todo.js';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todos: [
        {
          title: "Make a ToDo React Application",
          completed: false
        },
        {
          title: "Make a dinner tonight",
          completed: false
        }
      ]
    }
  }



  render(){
    return (
      <div className='App'>
        <h1>ToDo Application</h1> 
        <p>{this.state.todos.length}</p> 
        <section className="todos">
          {this.state.todos.map((todo, index) => (
            <Todo todo = {todo} key={index}/>
          ))}
        </section> 
        
      </div>
    );
  }
}

export default App;
