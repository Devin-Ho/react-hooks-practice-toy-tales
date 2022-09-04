import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteToy, onUpdateToy}) {
  const toysToRender = toys.map((toy) => <ToyCard key={toy.id} toy = {toy} handleDeleteToy = {handleDeleteToy} onUpdateToy = {onUpdateToy} />);

  return <div id="toy-collection">{toysToRender}</div>;
}

export default ToyContainer;
