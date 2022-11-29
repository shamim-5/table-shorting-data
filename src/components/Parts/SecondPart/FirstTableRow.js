import React from "react";

const FirstTableRow = ({ content }) => {
  const { person, email, role } = content;

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
      <td>
        <button
          className="text-[#3D92D6] underline underline-offset-2"
          onClick={() => (window.location.href = `mailto:${email}`)}
        >
          {email}
        </button>
      </td>
      <td>{role}</td>
    </tr>
  );
};

export default FirstTableRow;
