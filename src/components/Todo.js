import React from "react";
import { useGlobalContext } from "../context";
import List from "./List";
import TaskForm from "./TaskForm";
import Alert from "./Alert";
import {BsMoonFill, BsFillSunFill} from "react-icons/bs/index"

const ToDo = () => {
  const { list, alert, clearList, showAlert, theme, toggleTheme } = useGlobalContext();

  return (
    <section className="to-do">
      <div className="title">
        <h3>TODO</h3>
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <BsMoonFill className="icon" />
          ) : (
            <BsFillSunFill className="icon" />
          )}
        </button>
      </div>
      {alert.show && <Alert removeAlert={showAlert} />}
      <TaskForm />
      {list.length > 0 && (
        <div className="to-do-list">
          {list.map((item) => {
            return (
              <div key={item.id}>
                <List {...item} />
              </div>
            );
          })}
          <div className="flex-btn">
            <button className="btn" onClick={clearList}>
              clear items
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ToDo;
