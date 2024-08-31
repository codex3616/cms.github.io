import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Header from "../Header/Header";
import { Link, useParams } from "react-router-dom";
import { conferenceList } from "../conferenceList";

const EditCreateConf = ({ edit, create }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (edit) {
      const conference = conferenceList.find(
        (conf) => conf.id === parseInt(id)
      );
      // console.log(conference);

      setTitle(conference.title);
      setDescription(conference.description);
      setPlace(conference.schedule.location);
      setDate(conference.schedule.date);
    }
  }, [edit, id]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, description, place, date);
    setTitle("");
    setDescription("");
    setPlace("");
    setDate("");
  };
  return (
    <>
      <Header />
      <main className={styles.EditCreateConf}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            required
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            required
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Place"
            required
            name="place"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Date ( Day-Month-Year)"
            required
            name="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <button type="submit">{edit ? "Update" : "Create"}</button>
          <div className={styles.back}>
            <span>Back to conferences ?</span>
            <Link to="/admin">Click here</Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default EditCreateConf;
