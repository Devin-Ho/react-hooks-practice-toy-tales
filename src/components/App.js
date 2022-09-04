import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(toys=> setToys(toys))
  }, [])

  function handleAddNewToy(toy) {
    setToys([toy, ...toys, ])
  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleRemoveToy (id) {
    const updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys);
  }
  function handleDeleteToy (id) {
    fetch("http://localhost:3001/toys/" + id, {
      method: "DELETE",
    })
      .then(res => {
        if (res.status === 200) {
          handleRemoveToy(id)
        }
      });
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }


  return (
    <>
      <Header />
      {showForm && <ToyForm handleAddNewToy = {handleAddNewToy}/>}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onUpdateToy = {handleUpdateToy} handleDeleteToy = {handleDeleteToy} toys = {toys}/>
    </>
  );
}

export default App;
