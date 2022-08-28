import React from 'react'

const EditTable = ({ Edit, handleCancelClick, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          name='name'
          value={Edit.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='number'
          required='required'
          name='age'
          value={Edit.age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          name='nickname'
          value={Edit.nickname}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button className='btn btn-success me-3' type='submit'>
          Save
        </button>
        <button
          className='btn btn-danger me-3'
          type='button'
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditTable
