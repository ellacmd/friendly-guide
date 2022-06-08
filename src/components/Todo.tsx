import classes from './TodoItem.module.css';

type Props = {
    todo: string;
    deleteTodo: (id: string) => void;
};

const Todo = ({ todo, deleteTodo }: Props) => {
    return (
        <li className={classes.item} onClick={() => deleteTodo(todo)}>
            {todo}
        </li>
    );
};

export default Todo;
