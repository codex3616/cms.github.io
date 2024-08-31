import React from "react";
import AdminUserProfile from "../../Common/AdminUserProfile/AdminUserProfile";

const UserProfile = () => {
  const role = "user";
  return (
    <main>
      <AdminUserProfile role={role} />
    </main>
  );
};

export default UserProfile;
