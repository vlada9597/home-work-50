import React, { useState, useMemo, useCallback } from "react";
import UserList from "./components/UserList";

const generateUsers = () => {
  const users = [];
  for (let i = 1; i <= 10000; i++) {
    users.push({ id: i, name: `User ${i}` });
  }
  return users;
};

export default function App() {
  const [filter, setFilter] = useState("");

  // Мемоізуємо масив користувачів (щоб не генерувався знову при кожному ререндері)
  const users = useMemo(() => generateUsers(), []);

  // Мемоізуємо відфільтрованих користувачів (щоб фільтрація не виконувалась кожного разу)
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, users]);

  // Мемоізуємо callback для зміни фільтра (щоб не створювалась нова функція при кожному ререндері)
  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Оптимізація через мемоізацію</h1>
      <input
        type="text"
        placeholder="Пошук користувача..."
        value={filter}
        onChange={handleFilterChange}
        style={{ padding: 8, marginBottom: 20, width: 250 }}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}
