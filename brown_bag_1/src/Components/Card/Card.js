import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [active, setActive] = useState(false);
  const style = active ? { background: "#fff" } : {};
  return (
    <div
      className="card"
      style={style}
      onClick={() => {
        setActive(!active);
      }}
    >
      <img src="https://www.fanbyte.com/_next/image?url=https%3A%2F%2Fstatic.fanbyte.com%2Fuploads%2F2022%2F01%2FPokemon-Arceus-Unown-640x360.png&w=3840&q=75" />
    </div>
  );
};

export default Card;
