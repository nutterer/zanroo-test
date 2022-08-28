import React from 'react'

const Add = ({
  showAdd,
  handleAddinfo,
  showForm,
  setName,
  setAge,
  setNickname,
  name,
  age,
  nickname
}) => {
  return (
    <div className='container'>
      <button className='btn btn-primary' onClick={showAdd}>
        Add
      </button>
      {showForm && (
        <form className='row' onSubmit={handleAddinfo}>
          <input
            id='name'
            type='text'
            className='form-control col'
            required
            onChange={e => setName(e.target.value)}
            value={name}
          ></input>
          <input
            id='age'
            type='number'
            className='form-control col'
            required
            onChange={e => setAge(e.target.value)}
            value={age}
          ></input>
          <input
            id='nickname'
            type='text'
            className='form-control col '
            required
            onChange={e => setNickname(e.target.value)}
            value={nickname}
          ></input>
          <button type='submit' className='btn btn-primary col'>
            save
          </button>
          <button type='reset' className='btn btn-danger col' onClick={showAdd}>
            cancel
          </button>
        </form>
      )}
    </div>
  )
}
export default Add
