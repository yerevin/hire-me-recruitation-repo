import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { taskStore } from "core/stores";

import { FormGroupWithInput, Spinner } from "core/components/common";

export const TaskFormContainer = withRouter(
  observer(({ navigation, match, history }) => {
    const [name, setName] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    const [t] = useTranslation();

    useEffect(() => {
      const handleLoad = async () => {
        setLoading(true);
        let task = await taskStore.getTask(match.params.id);
        setLoading(false);
        if (task) {
          setName(task.name);
          setIsEdit(true);
        }
      };

      if (match.params.id) handleLoad();
    }, [match.params.id]);

    const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      if (isEdit) {
        return taskStore.update(match.params.id, name).then(() => {
          history.push("/tasks");
        });
      }

      taskStore.create(name).then(() => {
        history.push("/tasks");
      });
    };

    if (loading) return <Spinner />;

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <form className="task__form" name="taskForm">
            <FormGroupWithInput
              propName="name"
              label={t("task.name")}
              placeholder={t("task.name")}
              onChange={(propName, value) => setName(value)}
              defaultValue={name}
            />

            <button
              className="btn btn-block btn-primary"
              onClick={submit}
              type="submit"
              id="taskSaveBtn"
            >
              {t("core.save")}
            </button>

            <Link className="btn btn-block btn-default mg-top-20" to={"/tasks"}>
              {t("core.cancel")}
            </Link>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  })
);
