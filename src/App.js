import React, { useState, useEffect, Fragment } from 'react'
import Add from './component/Add'
import Table from './component/Table'
import EditTable from './component/EditTable'
const getDatafromLS = () => {
  const data = localStorage.getItem('information')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}
const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [editInfo, setEditInfo] = useState(null)
  const [information, setInformation] = useState(getDatafromLS())
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [nickname, setNickname] = useState('')
  const showAdd = () => {
    return setShowForm(!showForm)
  }
  const [Edit, setEdit] = useState({
    name: '',
    age: '',
    nickname: ''
  })
  const deleteinfo = name => {
    const filteredInformation = information.filter((element, index) => {
      return element.name !== name
    })
    setInformation(filteredInformation)
  }
  const handleAddinfo = e => {
    e.preventDefault()

    let informations = {
      name,
      age,
      nickname
    }
    setInformation([...information, informations])
    setName('')
    setAge('')
    setNickname('')
  }
  const handleEditClick = (event, information) => {
    event.preventDefault()
    setEditInfo(information.name)

    const formValues = {
      name: information.name,
      age: information.age,
      nickname: information.nickname
    }

    setEdit(formValues)
  }
  const handleEditFormSubmit = event => {
    event.preventDefault()
    const newInfo = [...information]
    const index = information.findIndex(
      information => information.name === editInfo
    )
    newInfo[index] = Edit
    setInformation(newInfo)
    setEditInfo(null)
  }
  const handleEditFormChange = event => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = { ...Edit }
    newFormData[fieldName] = fieldValue
    setEdit(newFormData)
  }
  const handleCancelClick = () => {
    setEditInfo(null)
  }
  useEffect(() => {
    localStorage.setItem('information', JSON.stringify(information))
  }, [information])

  return (
    <div className='App container'>
      <br />
      <form onSubmit={handleEditFormSubmit}>
        <table className='table mb-3'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Nickname</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {information.map(information => (
              <Fragment>
                {editInfo === information.name ? (
                  <EditTable
                    Edit={Edit}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <Table
                    information={information}
                    handleEditClick={handleEditClick}
                    deleteinfo={deleteinfo}
                    name={name}
                    age={age}
                    nickname={nickname}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <br />
      <Add
        showAdd={showAdd}
        handleAddinfo={handleAddinfo}
        showForm={showForm}
        setName={setName}
        setAge={setAge}
        setNickname={setNickname}
        name={name}
        age={age}
        nickname={nickname}
      />
    </div>
  )
}
export default App
