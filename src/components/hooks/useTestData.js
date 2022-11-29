import { useEffect, useState } from "react";

export default function useTestData() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("tableTestData.json");
      const data = await res.json();
      setContents(data);
    };

    getData();
  }, []);

  return [contents, setContents];
}
