// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: 'Cortar platano', completed: true },
  { text: 'Tomar el curso de intro de React', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
]



function App() {
const [todos, setTodos] = React.useState(defaultTodos);
const [searchValue, setSearchValue] = React.useState('');

const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;

let searchedTodos = [];

if (!searchValue.length >= 1) {
  searchedTodos  = todos;
} else {
  searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });
}

const completeTodos = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text == text);
  
  todos[todoIndex].completed =true;

  //todos[todoIndex] = {
    //text: todos[todoIndex].text,
    //completed: true,
  //};
}


  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    
    <TodoList >
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        />
      ))}
    </TodoList>

    <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
