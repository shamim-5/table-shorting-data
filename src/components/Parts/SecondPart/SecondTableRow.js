import React from "react";

const SecondTableRow = ({ content }) => {
  const { person, city, email, joiningDate, role } = content;

  return (
    <tr>
      <td>
        <button
          className="text-[#3D92D6] underline underline-offset-2"
          onClick={() => (window.location.href = `mailto:${email}`)}
        >
          {email}
        </button>
      </td>
      <td>{joiningDate}</td>
      <td>{role}</td>
    </tr>
  );
};

export default SecondTableRow;
