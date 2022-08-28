import React from 'react'

const Table = ({
  information,
  handleEditClick,
  deleteinfo,
  name,
  age,
  nickname
}) => {
  return (
    <tr keys={information.name}>
      <td>{information.name}</td>
      <td>{information.age}</td>
      <td>{information.nickname}</td>

      <td>
        <button
          className='btn btn-primary me-3'
          onClick={event => handleEditClick(event, information)}
        >
          Edit
        </button>

        <button
          className='btn btn-danger'
          onClick={() => deleteinfo(information.name)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Table
