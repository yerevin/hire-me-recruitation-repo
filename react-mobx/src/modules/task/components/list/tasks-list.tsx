import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { Spinner } from "core/components/common";

import { taskStore } from "core/stores";
import { useTranslation } from "react-i18next";

const TasksListHeader = () => {
  const [t] = useTranslation();

  return (
    <header>
      <div className="row mb-3">
        <div className="col-md-12">
          <h4 className="float-left">{t("task.list-title")}</h4>

          <Link to={`/task`} id="addTaskBtn">
            <button className="btn btn-sm btn-primary ml-4">
              {t("core.add")}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const TasksList = observer(() => {
  const [t] = useTranslation();

  if (taskStore.loading) return <Spinner />;

  if (!taskStore.tasks?.length) return <div>{t("task.not-found")}</div>;

  return (
    <div className="table-scrollable table-fixed-head">
      <table className="table table-hover table-sm">
        <colgroup>
          <col width="0" />
          <col width="15%" />
        </colgroup>

        <thead>
          <tr>
            <th>{t("task.name")}</th>
            <th>{t("core.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {taskStore.tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.name}</td>
                <td>
                  <Link
                    to={`/task/${task._id}`}
                    id={task.name.replace(" ", "_")}
                  >
                    <button className="btn btn-sm btn-primary">
                      {t("core.edit")}
                    </button>
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ml-2"
                    onClick={() => taskStore.delete(task._id)}
                  >
                    {t("core.delete")}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export const TasksListContainer = observer(() => {
  useEffect(() => {
    taskStore.listTasks();
  }, []);

  return (
    <div className="container">
      <TasksListHeader />
      <TasksList />
    </div>
  );
});
