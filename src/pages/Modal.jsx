import { useState } from "react";
import "./Modal.css";
import "./Modal.css";
import { v4 as uuidv4 } from 'uuid'

function Modal({ setShowModal , setEvents }) {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [age, setAge] = useState("");
  const [from, setFrom] = useState("");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gender :", gender)
    const obj = {
      url: url,
      name: name,
      name2: name2,
      age: age,
      from: from,
      job: job,
      gender: gender,
      id: uuidv4()
    };
    setEvents((prev) =>{
      return [...prev , obj]
    })
    setShowModal(false)
  };
  return (
    <div className="modal">
      <form
        className="modal-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <button
            onClick={() => {
              setShowModal(false);
            }}
            className="close-btn"
          >
            ✖️
          </button>
        <label>
          <span className="question">URL img:</span>
          <input type="text" required onChange={(e) => {
            setUrl(e.target.value)
          }}/>
        </label>
        <label>
          <span className="question">First name:</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          <span className="question">Last name:</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setName2(e.target.value);
            }}
          />
        </label>
        <label>
          <span className="question">Age:</span>
          <input
            type="number"
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </label>
        <label>
          <span className="question">From:</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
        </label>
        <label>
          <span className="question">Job:</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setJob(e.target.value);
            }}
          />
        </label>
        <label>
          <span className="question">Gender:</span>
          <select className="select"  onChange={(e) => {setGender(e.target.value)}}>
            <option value="Empty">Empty</option>
            <option value="Male">Male</option>
            <option value="Woman">Woman</option>
          </select>
        </label>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default Modal;
