import React, { useState } from "react";
import styles from "./styles.module.scss";
import SingleConfMenu from "./SingleConfMenu/SingleConfMenu";
import { conferenceList } from "../conferenceList";

const SideMenu = ({ role }) => {
  const [activeConfId, setActiveConfId] = useState(null);
  return (
    <>
      <menu className={styles.sideMenu}>
        <div className={styles.conferenceContainer}>
          {conferenceList.map((conf, idx) => {
            return (
              <SingleConfMenu
                key={idx}
                title={conf.title}
                id={conf.id}
                activeConfId={activeConfId}
                setActiveConfId={setActiveConfId}
                role={role}
              />
            );
          })}
        </div>
      </menu>
    </>
  );
};

export default SideMenu;
