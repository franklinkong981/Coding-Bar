import React from "react";

import {useFormik} from "formik";
import {useHistory} from "react-router-dom";

const AddMenuItemForm = ({addItemFunc, menuToAddTo}) => {
  const history = useHistory();

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
    async onSubmit(values) {
      await addItemFunc(values);
      isSnackMenu ? history.push("/snacks") : history.push("/drinks");
    }
  });

  return (
    <form className="AddMenuItemForm" onSubmit={formik.handleSubmit}>
      <h2 className="AddMenuItemForm-instructions">Add New Item to the {isSnackMenu ? "Snacks" : "Drinks"} Menu.</h2>

      <label htmlFor="AddMenuItemForm-name-field" className="AddMenuItemForm-label">Name:</label>
      <input id="AddMenuItemForm-name-field" className="AddMenuItemForm-input" type="text" name="name"
      size="25" value={formik.values.name} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <label htmlFor="AddMenuItemForm-description-field" className="AddMenuItemForm-label">Description:</label>
      <input id="AddMenuItemForm-description-field" className="AddMenuItemForm-input" type="text" name="description"
      size="25" value={formik.values.description} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <label htmlFor="AddMenuItemForm-recipe-field" className="AddMenuItemForm-label">Recipe Instructions:</label>
      <input id="AddMenuItemForm-recipe-field" className="AddMenuItemForm-input" type="text" name="recipe"
      size="25" value={formik.values.recipe} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <label htmlFor="AddMenuItemForm-serve-field" className="AddMenuItemForm-label">Serving Instructions:</label>
      <input id="AddMenuItemForm-serve-field" className="AddMenuItemForm-input" type="text" name="serve"
      size="25" value={formik.values.serve} onChange={formik.handleChange}/>
      {formik.errors.name ? <div className="AddMenuItemForm-error">{formik.errors.name}</div> : null} <br/>

      <button className="AddMenuItemForm-submit-button" type="submit">Add {isSnackMenu ? "Snack" : "Drink"}</button>
      <button className="AddMenuItemForm-back-button" type="button" onClick={() => isSnackMenu ? history.push("/snacks") : history.push("/drinks")}>Back</button>
    </form>
  );
};

export default AddMenuItemForm;