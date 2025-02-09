import React from "react";

import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

const AddMenuItemForm = ({addItemFunc, menuToAddTo}) => {
  const navigate = useNavigate();

  const isSnackMenu = (menuToAddTo == "Snacks");

  const validate = (values) => {
    const errors = {};
    for (let value in values) {
      if (!values[value]) errors[value] = "Required!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      recipe: '',
      serve: ''
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      addItemFunc(values);
      isSnackMenu ? navigate("/snacks") : navigate("/drinks");
    }
  });

  return (
    <form className="AddMenuItemForm" onSubmit={formik.handleSubmit}>
      <h2 className="AddMenuItemForm-instructions">Add New Item to the {isSnackMenu ? "Snacks" : "Drinks"} Menu.</h2>

      <label htmlFor="AddMenuItemForm-name-field" className="AddMenuItemForm-label">Name:</label>
      <input id="AddMenuItemForm-name-field" className="AddMenuItemForm-input" type="text" name="name"
      size="25" value={formik.values.name} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <label htmlFor="AddMenuItemForm-name-field" className="AddMenuItemForm-label">Name:</label>
      <input id="AddMenuItemForm-name-field" className="AddMenuItemForm-input" type="text" name="name"
      size="25" value={formik.values.name} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <label htmlFor="AddMenuItemForm-name-field" className="AddMenuItemForm-label">Name:</label>
      <input id="AddMenuItemForm-name-field" className="AddMenuItemForm-input" type="text" name="name"
      size="25" value={formik.values.name} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <label htmlFor="AddMenuItemForm-name-field" className="AddMenuItemForm-label">Name:</label>
      <input id="AddMenuItemForm-name-field" className="AddMenuItemForm-input" type="text" name="name"
      size="25" value={formik.values.name} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <button className="NewColorForm-submit-button" type="submit">Add Color</button>
      <button className="NewColorForm-home-button" type="button" onClick={() => navigate("/colors")}>Back to Home Page</button>
    </form>
  );
};

export default AddMenuItemForm;