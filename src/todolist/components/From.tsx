import React, { useState, ChangeEvent } from "react";
import "../../assets/from.css";
import { Props } from "../TodoList";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Divider } from "antd";

interface Iprops {
  addTodo: (todo: Props) => void;
  searchTodo: (text: string) => void;
}

type onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => void;
type addTodoHandler = (e: React.MouseEvent<HTMLElement>) => void;

const From = ({ addTodo, searchTodo }: Iprops) => {
  const [newText, setTaskName] = useState("");

  const onChangeInput: onChangeInput = (e) => {
    setTaskName(e.currentTarget.value);
  };

  const onChangeSearchInput: onChangeInput = (e) => {
    searchTodo(e.currentTarget.value)
  };

  const addTodoHandler: addTodoHandler = () => {
    addTodo({ id: new Date().getTime(), text: newText, isFinished: false });
    setTaskName("");
  };

  return (
    <div className="contentBox">
      <p className="title">TODOLIST</p>
      <div className="inputBox">
        <Input
          className="input"
          placeholder="Nome da tarefa"
          allowClear
          value={newText}
          onChange={onChangeInput}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={addTodoHandler}>
          Adicionar
        </Button>
      </div>
      <Divider className="divider" />
      <Input
        placeholder="Pesquisar uma tarefa"
        allowClear
        onChange={onChangeSearchInput}
      />
    </div>
  );
};
export default From;
