import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Importing TodoList Componenets

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todo-list.component";

import logo from "./logo.svg";

class  App extends Component {
  render(){ 
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          </a>
          <Link to="/" className="navbar-brand">MERN-STACK Todo APP</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li>
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodoList}></Route>
          <Route path="/edit/:id" exact component={EditTodo}></Route>
          <Route path="/create" exact component={CreateTodo}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
