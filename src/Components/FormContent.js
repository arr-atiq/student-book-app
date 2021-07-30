import React, { useState } from "react";
import "./FormContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faTrash,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const FormContent = () => {
  const [inputField, setInputField] = useState([
    { name: "", email: "", phone: "", dob: "" },
  ]);

  const [subjectField, setSubjectField] = useState([{ subject: "" }]);

  const handleInputChange = (event, index) => {
    const inputValue = [...inputField];
    inputValue[index][event.target.name] = event.target.value;
    setInputField(inputValue);
  };

  const handleSubjectChange = (event, index) => {
    const subjectValue = [...subjectField];
    subjectValue[index][event.target.name] = event.target.value;
    setSubjectField(subjectValue);
  };

  const handleAddSubject = () => {
    setSubjectField([...subjectField, { subject: "" }]);
  };

  const handleRemoveSubject = (e) => {
    setSubjectField((oldSubject) =>
      subjectField.filter((value) => value !== oldSubject[0])
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const studentData = {
      id: new Date().getTime(),
      student: inputField,
    }

    const subjectData = {
      id: new Date().getTime()*5,
      subject: subjectField
    }
    console.log("studentData:",studentData,"subjectField:",subjectData)
  };

  return (
    <div className="container mt-5">
      <form action="" onSubmit={handleSubmit}>
        <div className="card shadow bg-white rounded">
          {inputField.map((field, index) => (
            <div className="row" key={index}>
              <div className="col-md-4">
                <input
                  type="text"
                  name="name"
                  label="name"
                  placeholder="Enter Your Name"
                  className="form-control"
                  value={field.name}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="email"
                  label="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={field.email}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="phone"
                  label="phone"
                  placeholder="Enter Your Phone"
                  className="form-control"
                  value={field.phone}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  name="dob"
                  label="dob"
                  placeholder="Enter Your DOB"
                  className="form-control mt-4"
                  value={field.dob}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </div>
              <div className="col-md-4 d-flex" key={index}>
                <button
                  type="button"
                  className="btn btn-primary addbtn"
                  onClick={handleAddSubject}
                >
                  Add Subject <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </div>
            </div>
          ))}

          {subjectField.map((subject, index) => (
            <div className="row" key={index}>
              <div className="col-md-4 d-flex">
                <input
                  type="text"
                  name="subject"
                  label="subject"
                  placeholder="Enter Your Subject"
                  className="form-control mt-4"
                  value={subject.subject}
                  onChange={(event) => handleSubjectChange(event, index)}
                />
                <button
                  type="button"
                  disabled={subjectField.length === 1}
                  className="btn btn-danger dltBtn"
                  onClick={(e) => handleRemoveSubject(e)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="btn btn-primary mt-5 subBtn"
            onClick={handleSubmit}
          >
            Submit <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContent;
