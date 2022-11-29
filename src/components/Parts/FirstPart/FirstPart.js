import React, { useEffect, useState } from "react";
import useTestData from "../../hooks/useTestData";
import FirstTableRow from "./FirstTableRow";

const FirstPart = () => {
  // const [contents] = useTestData();
  // const [copy, setCopy] = useState([]);

  // const [sorting, setSorting] = useState({ key: "city", ascending: true });

  // useEffect(() => {
  //   setCopy(contents);

  //   if (contents.length) {
  //     console.log(copy);
  //     // copy.sort(function (a, b) {
  //     //   let x = a.person.name.toLowerCase();
  //     //   let y = b.person.name.toLowerCase();
  //     //   if (x < y) {
  //     //     return -1;
  //     //   }
  //     //   if (x > y) {
  //     //     return 1;
  //     //   }
  //     //   return 0;
  //     // });

  //     copy.sort((a, b) => {
  //       return a[sorting.key].localeCompare(b[sorting.key]);
  //     });
  //   }
  // }, [contents, copy]);

  const [contents] = useTestData();
  const [sortedContents, setSortedContents] = useState([]);

  const [sorting, setSorting] = useState({ key: "city", ascending: true });
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

      setSortedContents(sorting.ascending ? sortedCurrentContents : sortedCurrentContents.reverse());
    }
  }, [contents, sorting, currentContents]);

  const applySorting = (key, ascending) => {
    setSorting({ key: key, ascending: ascending });
  };

  return (
    <div className="py-4">
      <h2 className="font-bold">Assignment:</h2>
      <h3 className="font-bold mb-6">Part 01:</h3>
      <table className="table table-compact table-zebra w-[920px]">
        <thead>
          <tr>
            <th className="cursor-pointer" onClick={() => applySorting("name", !sorting.ascending)}>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>Name</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th className="cursor-pointer" onClick={() => applySorting("city", !sorting.ascending)}>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>City</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th className="cursor-pointer" onClick={() => applySorting("email", !sorting.ascending)}>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>Email Address</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th className="cursor-pointer" onClick={() => applySorting("joiningDate", !sorting.ascending)}>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>Joining Date</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th className="cursor-pointer" onClick={() => applySorting("role", !sorting.ascending)}>
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
          {sortedContents.map((content, index) => (
            <FirstTableRow key={index} content={content}></FirstTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstPart;
