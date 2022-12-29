import React from 'react'
import './index.scss'

function CheckBox(): JSX.Element {
  return (
    <label className="checkbox-container">
        <input type="checkbox"/>
        <span className="checkbox"></span>
    </label>
  )
}

export default CheckBox