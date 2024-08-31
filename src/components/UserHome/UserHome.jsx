import React from "react";
import Header from "../Common/Header/Header";
import SideMenu from "../Common/SideMenu/SideMenu";

const UserHome = () => {
  const role = "user";
  return (
    <>
      <main>
        <Header role={role} />
        <SideMenu role={role} />
      </main>
    </>
  );
};

export default UserHome;
