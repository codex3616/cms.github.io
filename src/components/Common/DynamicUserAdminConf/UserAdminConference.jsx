import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import { conferenceList, userList } from "../conferenceList";
import SingleUser from "./SingleUser/SingleUser";
import { MdDeleteSweep } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import FeedBack from "./FeedBack/FeedBack";

const UserAdminConference = ({ role }) => {
  const [showUser, setShowUser] = useState(false);
  const [feedBackActive, setFeedbackActive] = useState(false);
  const { id } = useParams();
  const conference = conferenceList.find((conf) => conf.id === parseInt(id));

  const deleteConference = () => {
    console.log("deleted");
  };
  const registerHandler = () => {
    toast.dismiss();
    toast.success("Registered Successfully...");
  };

  return (
    <>
      <main className={styles.userAdminConference}>
        <Header role={role} />
        <SideMenu role={role} />
        <div className={styles.aside}>
          <div className={styles.title}>
            <h2> {conference.title}</h2>
            <p>
              <span> Description : </span>
              {conference.description}
            </p>
          </div>
          <div className={styles.schedule}>
            <p>
              <span> Place : </span>
              {conference.schedule.location}
            </p>
            <p>
              <span> Date : </span>
              {conference.schedule.date}
            </p>
          </div>
          {role === "user" ? (
            <div className={styles.registerUser}>
              {/* Allready Registered */}
              <span>Want to register for that conference ? </span>
              <h4 onClick={registerHandler}> Register</h4>
            </div>
          ) : null}

          {role !== "user" ? (
            <div className={styles.editDelte}>
              <Link to={`/admin/editConference/${conference.id}`}>
                <MdEditNote />
              </Link>
              <MdDeleteSweep onClick={deleteConference} />
            </div>
          ) : null}
          {role !== "user" ? (
            <div className={styles.users}>
              <div className={styles.arrowBtn}>
                <button>View all Users</button>
                <TiTick
                  onClick={() => {
                    setShowUser(true);
                  }}
                />
                <RxCross2
                  onClick={() => {
                    setShowUser(false);
                  }}
                />
              </div>

              {showUser === true && (
                <div className={styles.refUser}>
                  {userList.map((user, idx) => {
                    return <SingleUser key={idx} user={user} />;
                  })}
                </div>
              )}
            </div>
          ) : null}
          <div className={styles.home}>
            <span>Back to home ?</span>{" "}
            <Link to={role === "user" ? "/user" : "/admin"}>Click here</Link>
          </div>

          {role === "user" ? (
            <div className={styles.viewFeedBack}>
              <button
                onClick={() => {
                  setFeedbackActive(!feedBackActive);
                }}
              >
                Add Feedback..
              </button>
            </div>
          ) : null}
        </div>
        {feedBackActive ? (
          <div className={styles.feedBack}>
            <FeedBack
              setFeedbackActive={setFeedbackActive}
              feedBackActive={feedBackActive}
            />
          </div>
        ) : null}

        <Toaster />
      </main>
    </>
  );
};

export default UserAdminConference;
