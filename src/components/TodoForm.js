import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            tittle: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.OnAddTodo(this.state);

    }
    render(){
     return (
        <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" name="tittle" onChange={this.handleInput} className="form-control" placeholder="title">
                    </input>
                </div>
                <div className="form-group">
                    <input type="text" name="responsible" onChange={this.handleInput} className="form-control" placeholder="responsible">
                    </input>
                </div>
                <div className="form-group">
                    <input  className="form-control" type="text" name="description" onChange={this.handleInput} placeholder="description">
                    </input>
                </div>
                <div className="form-group">
                    <select name="priority" className="form-control" onChange={this.handleInput}>
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
     )
 }   
}

export default TodoForm;