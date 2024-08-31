import React from "react";
import EditCreateConf from "../../Common/EditCreateConf/EditCreateConf";

const CreateConference = () => {
  const create = true;

  return (
    <>
      <main>
        <EditCreateConf create={create} />
      </main>
    </>
  );
};

export default CreateConference;
