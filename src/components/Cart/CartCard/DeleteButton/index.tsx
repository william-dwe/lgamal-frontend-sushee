import React from 'react'
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import './index.scss'


function DeleteButton(): JSX.Element {
  return (
    <button className="delete-button">
        <span className="mdi mdi-delete mdi-24px"><MdDeleteOutline/></span>
        <span className="mdi mdi-delete-empty mdi-24px"><MdDelete/></span>
    </button>
  )
}

export default DeleteButton