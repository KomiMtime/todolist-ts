import ReactDOM from "react-dom/client";
import TodoList from "./todolist/TodoList";
import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<TodoList></TodoList>);
