import { useState } from "react";

export default function useTestData() {
  const [data, setData] = useState([]);

  fetch("tableTestData.json")
    .then((res) => res.json())
    .then((data) => setData(data));

  return [data, setData];
}
