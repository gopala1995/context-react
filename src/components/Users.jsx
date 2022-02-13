import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((x) => x.json())
      .then(({ data }) => setUser(data));
  }, []);

  return (
    <div>
      {users.map((e,i) => (
        <p key = {i}>User:--{e.id}- <Link to ={`/users/${e.id}`}>{e.first_name}</Link></p>
        // console.log(e.email);
      ))}
    </div>
  );
};
