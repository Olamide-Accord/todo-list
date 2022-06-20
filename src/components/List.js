import React from 'react'
import {FaEdit, FaTrash} from "react-icons/fa/index"
import { useGlobalContext } from '../context'

const List = ({id, title}) => {
  const { removeItem, editItem} = useGlobalContext()
  return (
    <div className="list-items">
      <p className="input-text">{title}</p>
      <div className='flex-icons'>
        <button className='edit-icon' onClick={() => editItem(id)}>
          <FaEdit className='icons' />
        </button>
        <button className='delete-icon' onClick={() => removeItem(id)}>
          <FaTrash className='icons'/>
        </button>
      </div>
    </div>
  )
}

export default List