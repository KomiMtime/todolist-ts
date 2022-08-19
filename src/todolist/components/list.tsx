import ListItem from "./listItem";
import { Props } from "../TodoList";
import "../../assets/from.css";

interface IProps {
  list: Props[];
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const List = ({ list, changeTodo ,deleteTodo}: IProps) => {
  const listDom = list.map((item) => {
    return (
      <ListItem key={item.id} todo={item} changeTodo={changeTodo} deleteTodo={deleteTodo}></ListItem>
    );
  });

  return <div className="contentBox">{listDom}</div>;
};
export default List;
