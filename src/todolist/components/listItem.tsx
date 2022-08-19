import { Props } from "../TodoList";
import { Checkbox } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./listItem.css"

interface IProps {
  todo: Props;
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const ListItem = ({ todo, changeTodo, deleteTodo }: IProps) => {
  const changeHandler = (e: CheckboxChangeEvent) => {
    changeTodo(todo.id);
  };
  const deleteHandler = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className='listData'>
      <Checkbox onChange={changeHandler} checked={todo.isFinished}>
        <span>{todo.text}</span>
      </Checkbox>
      <DeleteFilled onClick={deleteHandler} />
    </div>
  );
};
export default ListItem;
