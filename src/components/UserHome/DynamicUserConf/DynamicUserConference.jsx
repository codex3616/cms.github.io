import React from "react";
import UserAdminConference from "../../Common/DynamicUserAdminConf/UserAdminConference";

const DynamicUserConference = () => {
  const role = "user";
  return (
    <main>
      <UserAdminConference role={role} />
    </main>
  );
};

export default DynamicUserConference;
