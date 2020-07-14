import React from "react";
import { observer } from "mobx-react";

export const FormGroupWithInput = observer(
  ({
    label,
    defaultValue,
    onChange,
    propName,
    min,
    max,
    step,
    placeholder = "",
    type = "text",
    isRequired = false,
    inputClassName = "form-control",
    onKeyPress,
  }: {
    label: string;
    defaultValue?: any;
    onChange: Function;
    propName: string;
    min?: number;
    max?: number;
    step?: string;
    placeholder: string;
    type?: string;
    isRequired?: boolean;
    inputClassName?: string;
    onKeyPress?: Function;
  }) => {
    return (
      <div className="form-group">
        <label className="control-label">
          {label} {isRequired && <span className="text-danger">*</span>}
        </label>
        <input
          className={inputClassName}
          type={type}
          min={min}
          max={max}
          step={step}
          name={propName}
          placeholder={placeholder}
          onChange={(e) => {
            onChange && onChange(propName, e.target.value);
          }}
          onKeyPress={(e) => {
            onKeyPress && onKeyPress(e);
          }}
          defaultValue={defaultValue}
        />
      </div>
    );
  }
);
