import { useState } from "react";
import NameReversed from "./nameReversed.js";
import NameLength from "./nameLength.js";
import Title from "./title.js";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  );
}
