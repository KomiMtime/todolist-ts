import React, { useState } from "react";
import From from "./components/From";
import List from "./components/list";
import Total from "./components/Total";

export interface Props {
  id: number;
  text: string;
  isFinished: boolean;
}

const TodoList = () => {
  const [todoList, setTdoList] = useState<Props[]>([]);
  const [listCopy, setListCopy] = useState<Props[]>([]);

  const changeTodo = (id: number) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return Object.assign({}, item, {
          isFinished: !item.isFinished,
        });
      }
      return item;
    });

    setTdoList(newTodoList);
  };
  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((item) => {
      return item.id != id;
    });
    setTdoList(newTodoList);
    const newTodoListCopy = listCopy.filter((item) => {
      return item.id != id;
    });
    setListCopy(newTodoListCopy);
  };

  const addTodo = (todo: Props) => {
    if (todo.text === "") {
      return;
    }
    setTdoList([...todoList, todo]);
    setListCopy([...listCopy, todo]);
  };

  const searchTodo = (text: string) => {
    if (text) {
      let searchTodo = todoList.filter((val) => {
        return val.text.toLowerCase().includes(text.toLowerCase());
      });
      setTdoList(searchTodo);
    } else {
      return setTdoList(listCopy);
    }
  };

  return (
    <div>
      <From addTodo={addTodo} searchTodo={searchTodo}></From>
      <List
        list={todoList}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
      ></List>
      <Total list={todoList}></Total>
    </div>
  );
};
export default TodoList;
