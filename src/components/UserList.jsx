import React from "react";
import UserItem from "./UserItem";

// React.memo запобігає непотрібному повторному ререндеру списку
const UserList = React.memo(({ users }) => {
  console.log("🔁 Рендер списку користувачів");

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
});

export default UserList;
