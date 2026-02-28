import React, { useState } from "react";
import type { User } from "./types";

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 28 },
  { name: "Diana", email: "diana@mail.com", age: 22 },
  { name: "Ethan", email: "ethan@mail.com", age: 35 },
];

function SearchApp() {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);

    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div>
      <h1>User Search</h1>

      <input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name"
      />

      <button onClick={handleClear}>Clear</button>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchApp;