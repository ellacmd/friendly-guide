import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
function App() {
    const [todos, setTodos] = useState<string[]>([]);
    const onAddTodo = (text: string) => {
        setTodos((prev) => [...prev, text]);
    };
    const onDeleteTodo = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo !== id));
    };
    return (
        <div>
            <AddTodo addTodo={onAddTodo} />
            <Todos items={todos} deleteTodo={onDeleteTodo} />
        </div>
    );
}

export default App;
