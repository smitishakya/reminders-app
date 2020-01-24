import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

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
  
  addTodo = e => {
    e.preventDefault();
    let title = e.target.title.value;
    let newTodo = {title, completed: false};
    this.setState({
      todos: [ ...this.state.todos, newTodo]
    })

  }


  toggleCompleted = (index) => {
    let todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({todos});
  }

  deleteTodo = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    let todos = this.state.todos.filter((todo, i) => parseInt(index, 10) !== i);
    this.setState({todos});
  }

  render(){
    return (
      <div className='App'>
        <h1>ToDo Application</h1> 
        <p>{this.state.todos.length}</p>
        <TodoForm addTodo = {this.addTodo}/> 
        <h2>Things to do today</h2>
        <section className="todos">
          {this.state.todos.map((todo, index) => (
            <Todo 
            todo = {todo} 
            key={index}
            index={index}
            toggleCompleted = {this.toggleCompleted}
            deleteTodo = {this.deleteTodo}
            />
          ))}
        </section> 
        
      </div>
    );
  }
}

export default App;
