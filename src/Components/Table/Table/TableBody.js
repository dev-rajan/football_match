import React from "react";

const TableBody = ({ clubData, handleOpenModal, setModalData }) => {
  console.log(clubData);

  const ClubList = () => (
    <tbody>
      {clubData?.map((el, idx) => (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td
            className="teams"
            onClick={() => {
              handleOpenModal(idx);
              setModalData(el);
            }}
          >
            <p>{el.name}</p>
          </td>
          <td>{el.played}</td>
          <td>{el.won}</td>
          <td>{el.draw}</td>
          <td>{el.lost}</td>
          <td>{el.gf}</td>
          <td>{el.ga}</td>
          <td>{el.gd}</td>
          <td>{el.points}</td>
          <td>
            {el.form.map((elm, idx) => {
              if (elm == 3) {
                return <span key={idx}>won</span>;
              } else if ((elm = 1)) {
                return <span key={idx}>drew</span>;
              } else {
                return <span key={idx}>loss</span>;
              }
            })}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return <ClubList />;
};

export default TableBody;
