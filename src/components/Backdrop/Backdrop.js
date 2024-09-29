import React from 'react'
import classes from './Backdrop.module.css'
import CFButton from '../../card/confirm/CFButton/CFButton'


export default function Backdrop(props) {



  return (
    <div>
      <div className={classes.Backdrop} >
      <CFButton props={props} />
      </div>
    </div>
  )
}
