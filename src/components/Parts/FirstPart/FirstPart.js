import React from "react";
import useTestData from "../../hooks/useTestData";
import FirstTableRow from "./FirstTableRow";

const FirstPart = () => {
  const [contents] = useTestData();

  return (
    <div className="py-4">
      <h2 className="font-bold">Assignment:</h2>
      <h3 className="font-bold mb-6">Part 01:</h3>
      <table className="table table-compact table-zebra w-[920px]">
        <thead>
          <tr>
            <th>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>Name</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>City</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>Email Address</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th>
              <div className="flex items-center space-x-2">
                <div>
                  <h2>Joining Date</h2>
                </div>
                <div>
                  <img src="https://img.icons8.com/pastel-glyph/12/null/sorting-arrows--v1.png" alt="up-down-arrow" />
                </div>
              </div>
            </th>
            <th>
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
          {contents.map((content, index) => (
            <FirstTableRow key={index} content={content}></FirstTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstPart;
