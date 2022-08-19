import React from "react";
import { Props } from "../TodoList";
import "./total.css";

interface IProps {
  list: Props[];
}

const Total = ({ list }: IProps) => {
  return (
    <div className="contentBox">
      <div className="totalBox">
        Total de tarefas: <span>{list.length}</span>
      </div>
      <div className="totalBox">
        Total de tarefas concluidas:{" "}
        <span>
          {
            list.filter((item) => {
              if (item.isFinished) {
                return item;
              }
            }).length
          }
        </span>
      </div>
    </div>
  );
};
export default Total;
