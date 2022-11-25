import React from "react";
import useTestData from "../../hooks/useTestData";
import FirstTableRow from "./FirstTableRow";
import SecondTableRow from "./SecondTableRow";
import ThirdTableRow from "./ThirdTableRow";

const SecondPart = () => {
  const [contents] = useTestData();

  return (
    <div className="space-y-6">
      <h3 className="font-bold">Part 02:</h3>
      <div>
        <table className="table table-compact table-zebra w-[570px]">
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
              <th>Email Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content, index) => (
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
              <th>Joining Date</th>
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
              <ThirdTableRow key={index} content={content}></ThirdTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondPart;
