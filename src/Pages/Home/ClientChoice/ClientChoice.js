import React, { useEffect, useState } from "react";
import ClientChoiceCart from "./ClientChoiceCart";

const ClientChoice = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("clientChoice.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="m-20">
      <h3 className="text-center font-bold text-2xl mb-4">
        Client's Most Popular Choice
      </h3>
      <h1 className="text-center font-bold text-4xl">Why People Choose Us</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {items.map((item) => (
          <ClientChoiceCart key={item.id} item={item}></ClientChoiceCart>
        ))}
      </div>
    </div>
  );
};

export default ClientChoice;
