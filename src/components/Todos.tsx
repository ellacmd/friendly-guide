import Todo from './Todo';
import classes from './Todos.module.css';

type Props = {
    items: string[];
    deleteTodo: (id: string) => void;
};

const Todos = ({ deleteTodo, items }: Props) => {
    return (
        <div>
            <ul className={classes.todos}>
                {items.map((item) => (
                    <Todo todo={item} key={item} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default Todos;
