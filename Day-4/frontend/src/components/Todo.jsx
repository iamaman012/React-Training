import { useDeleteTodos ,useEditTodos} from "../api/react-query";

export const Todo = ({ todo}) => {
  console.log(todo);
  const {mutate:deleteTodo} = useDeleteTodos();
  const {mutate:editTodo1} = useEditTodos();
  return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
         onChange={(e) => editTodo1({ ...todo, done: e.target.checked })}
      />
      <span className="flex-grow">{todo.task}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="color-danger"
      >
        Delete
      </button>
    </div>
  );
};
