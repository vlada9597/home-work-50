import React from "react";

// React.memo — щоб окремі елементи не ререндерились, якщо не змінилися їхні пропси
const UserItem = React.memo(({ user }) => {
  console.log(`👤 Рендер користувача: ${user.name}`);
  return <li>{user.name}</li>;
});

export default UserItem;
