import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';

import { todos } from './todos.json';



class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo (todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    console.log(index);
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    })
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.tittle}</h3>
              <span className="badge badge-pill badge-danger">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App">
        <nav className = "navbar navbar-expand-sm bg-dark navbar-dark">
          <a href="prueba" className="text-white">
            Task
          </a>
          <span id="contador" className="badge badge-pill badge-light">
            {this.state.todos.length}
          </span>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm OnAddTodo = {this.handleAddTodo} />
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
} 

export default App;
