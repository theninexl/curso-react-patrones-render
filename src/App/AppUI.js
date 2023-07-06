import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';


function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeStandaloneTodo,
    deleteStandaloneTodo,
}){

    return (
        // react.fragment se utiliza porque React necesita al menos 1 elemento al menos para poder renderizar lo que necesite la aplicaion dentro, y necesita también el import React from 'react' de la parte superior para poder funcionar. 
    // <React.Fragment>
    // pero tambien se puede sustituir solo con '<>' y elimina la necesidad de hacer el import de React
    <>

    <TodoCounter 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
      {(loading = true && searchedTodos.length === 0) && 
        <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
        </>}
      {error &&  <TodosError />}
      {(!loading && searchedTodos.length === 0) && <TodosEmpty />}


      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={() => completeStandaloneTodo(todo.text)}
        onDelete={() => deleteStandaloneTodo(todo.text)}
        />
      ))}
    </TodoList>

    <CreateTodoButton/>
    </>  
  // </React.Fragment>
    )
}

export { AppUI };