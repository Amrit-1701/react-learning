
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="text-center bg-pink-500 p-4 text-3xl mt-10">
      User: {userid}
    </div>
  );
}

export default User;