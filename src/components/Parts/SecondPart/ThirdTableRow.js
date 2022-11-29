import React from 'react';

const ThirdTableRow = ({content}) => {
    const { person, city, joiningDate, role } = content;

    return (
      <tr>
        <td>
          <div className="flex items-center space-x-[10px]">
            <div>
              <img src={person.avatar} alt="avatar" />
            </div>
            <div>{person.name}</div>
          </div>
        </td>
        <td>{city}</td>
        <td>{joiningDate}</td>
        <td>{role}</td>
      </tr>
    );
};

export default ThirdTableRow;