import React, { useState } from "react";
import "./FormContent.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const FormContent = () => {
  const { register, handleSubmit } = useForm();
  const [subField, setSubField] = useState([]);

  const handleAddSubject = (e) => {
    e.preventDefault();
    const subjectInputData = {
      Subject: "",
    };
    setSubField((oldValue) => [...oldValue, subjectInputData]);
  };

  const handleRemSubject = (e) => {
    e.preventDefault();

    setSubField((existField) =>
      existField.filter((value) => value !== existField[0])
    );
  };

  const onSubmit = (data, e) => {
      e.preventDefault();
  };

  return (
    <div className="main">
      <div className="card p-4">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-auto">
              <label htmlFor="" className="col-form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                className="form-control"
              />
            </div>
            <div className="col-auto">
              <label htmlFor="" className="col-form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                {...register("email", { required: true })}
                className="form-control"
              />
            </div>
            <div className="col-auto">
              <label htmlFor="" className="col-form-label">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                {...register("phone", { required: true })}
                className="form-control"
              />
            </div>
            <div className="col-auto">
              <label htmlFor="" className="col-form-label">
                DOB
              </label>
              <input
                type="date"
                name="dob"
                {...register("dob", { required: true })}
                className="form-control"
              />
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary subBtn"
                onClick={handleAddSubject}
              >
                <FontAwesomeIcon icon={faPlusCircle} /> Add Subject
              </button>
            </div>
            <div className="col-auto subBtn">
              {subField.map((field, index) => (
                <div className="row mb-3" key={index}>
                  <div className="col-auto d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add Subject"
                      name="subject"
                      {...register("subject", { required: true })}
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => handleRemSubject(e)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContent;
