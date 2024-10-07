import React from 'react'
import MainMenu from '../MainMenu/MainMenu'

export default function Layout(props) {
  return (
    <div>
      <MainMenu/>
      <hr/>
      {props.children}
    </div>
  )
}
