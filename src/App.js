import React, { useState } from "react";
import Form from "./CRUD/CrudForm";
import "bootstrap/dist/css/bootstrap.min.css";
import CrudTable from "./CRUD/CrudTable";

function App() {
  const [persons, setPersons] = useState([
    {
      personName: "Setso",
      description: "Very  at programming",
    },
    {
      personName: "Adwoa",
      description: "Very  at Ampe",
    },
  ]);

  const updateState = (userName, userDescription) => {
    const newUser = {
      personName: userName,
      description: userDescription,
    };

    setPersons([...persons, newUser]);
  };
  console.log(persons);
  return (
    <div>
      <Form inputData={updateState} />
      <CrudTable data={persons} />
    </div>
  );
}

export default App;
