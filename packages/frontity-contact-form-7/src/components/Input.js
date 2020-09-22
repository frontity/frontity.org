import { connect } from "frontity";
import React, { useContext } from "react";

import FormIdContext from "../context/FormIdContext";
/**
 * Input Component.
 *
 * @param {Object} state Frontity State.
 * @param {Object} actions Actions methods.
 * @param {Object} inputProps Input props.
 * @return {*}
 */
const Input = ({ state, actions, inputProps }) => {
  // Context is used so that we can pass the form id to different components.
  const id = useContext(FormIdContext);
  const inputName = inputProps.name;
  const placeholder = inputProps.placeholder;
  if ("undefined" === typeof state.cf7.forms[id].inputVals[inputName]) {
    const value =
      inputProps.type === "checkbox" ? inputProps.checked : inputProps.value;
    actions.cf7.changeInputValue({ id, inputName, value });
  }
  /**
   * OnChange handler for input.
   *
   * @param {Object} event Event.
   *
   * @return {void}
   */
  const onChange = (event) => {
    let value =
      inputProps.type === "checkbox"
        ? !event.target.checked
          ? ""
          : event.target.checked
        : event.target.value;
    actions.cf7.changeInputValue({ id, inputName, value });
  };
  return inputProps.type === "checkbox" ? (
    <input
      name={inputProps.name}
      className={inputProps.className}
      aria-invalid={inputProps.ariaInvalid}
      aria-required={inputProps.ariaRequired}
      size={inputProps.size}
      type={inputProps.type}
      checked={state.cf7.forms[id].inputVals[inputName]}
      onChange={onChange}
      placeholder={inputProps.placeholder}
    />
  ) : (
    <input
      name={inputProps.name}
      className={inputProps.className}
      aria-invalid={inputProps.ariaInvalid}
      aria-required={inputProps.ariaRequired}
      size={inputProps.size}
      type={inputProps.type}
      value={state.cf7.forms[id].inputVals[inputName]}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default connect(Input);
