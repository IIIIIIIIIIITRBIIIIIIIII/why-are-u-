import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>
    </div>
  );
};

export default Profil;
