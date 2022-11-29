import React, { useEffect, useState } from "react";
import useTestData from "../../hooks/useTestData";
import FirstTableRow from "./FirstTableRow";
import SecondTableRow from "./SecondTableRow";
import ThirdTableRow from "./ThirdTableRow";

const SecondPart = () => {
  const [contents] = useTestData();

  const [firstTC, setFirstTC] = useState([]);
  const [secondTC, setSecondTC] = useState([]);
  const [thirdTC, setThirdTC] = useState([]);

  const [sorting, setSorting] = useState({ key: "name", ascending: true, table: null });
  const [currentContents, setCurrentContents] = useState([]);

  useEffect(() => {
    setCurrentContents(contents);

    const currentContentsCopy = [...currentContents];

    if (contents.length) {
      const sortedCurrentContents = currentContentsCopy.sort((a, b) => {
        if (sorting?.key === "joiningDate") {
          return new Date(a.joiningDate.split("/").reverse()) - new Date(b.joiningDate.split("/").reverse());
        } else if (sorting.key === "name") {
          return a.person[sorting.key].localeCompare(b.person[sorting.key]);
        } else {
          return a[sorting.key].localeCompare(b[sorting.key]);
        }
      });

      if (sorting.table === 1) setFirstTC(sorting.ascending ? sortedCurrentContents : sortedCurrentContents.reverse());
      else if (sorting.table === 2)
        setSecondTC(sorting.ascending ? sortedCurrentContents : sortedCurrentContents.reverse());
      else if (sorting.table === 3)
        setThirdTC(sorting.ascending ? sortedCurrentContents : sortedCurrentContents.reverse());
      else if (sorting.table === null) {
        setFirstTC(sorting.ascending ? sortedCurrentContents : sortedCurrentContents.reverse());
        setSecondTC(sorting.ascending ? sortedCurrentContents : sortedCurrentContents.reverse());
        setThirdTC(sorting.ascending ? sortedCurrentContents : sortedCurrentContents.reverse());
      }
    }
  }, [contents, sorting, currentContents]);

  const applySorting = (key, ascending, table) => {
    setSorting({ key: key, ascending: ascending, table: table });
  };

  return (
    <div className="space-y-6">
      <h3 className="font-bold pt-6">Part 02:</h3>
      <div>
        <table className="table table-compact table-zebra w-[570px]">
          <thead>
            <tr>
              <th className="cursor-pointer" onClick={() => applySorting("name", !sorting.ascending, 1)}>
                <div className="flex items-center space-x-2">
                  <div>
                    <h2>Name</h2>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                  </div>
                </div>
              </th>
              <th>Email Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {firstTC.map((content, index) => (
              <FirstTableRow key={index} content={content}></FirstTableRow>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <table className="table table-compact table-zebra w-[570px]">
          <thead>
            <tr>
              <th>Email Address</th>
              <th className="cursor-pointer" onClick={() => applySorting("joiningDate", !sorting.ascending, 2)}>
                <div className="flex items-center space-x-2">
                  <div>
                    <h2>Joining Date</h2>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                  </div>
                </div>
              </th>
              <th className="cursor-pointer" onClick={() => applySorting("role", !sorting.ascending, 2)}>
                <div className="flex items-center space-x-2">
                  <div>
                    <h2>Role</h2>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {secondTC.map((content, index) => (
              <SecondTableRow key={index} content={content}></SecondTableRow>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <table className="table table-compact table-zebra w-[700px]">
          <thead>
            <tr>
              <th>Name</th>
              <th className="cursor-pointer" onClick={() => applySorting("city", !sorting.ascending, 3)}>
                <div className="flex items-center space-x-2">
                  <div>
                    <h2>City</h2>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                  </div>
                </div>
              </th>
              <th>Joining Date</th>
              <th className="cursor-pointer" onClick={() => applySorting("role", !sorting.ascending, 3)}>
                <div className="flex items-center space-x-2">
                  <div>
                    <h2>Role</h2>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {thirdTC.map((content, index) => (
              <ThirdTableRow key={index} content={content}></ThirdTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondPart;
