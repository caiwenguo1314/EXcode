import React from 'react'
import classes from './Backdrop.module.css'
import CFButton from '../../card/confirm/CFButton/CFButton'
// import { toggleBackdropState } from '../../store/reducer/backdropStateSlice';
// import { useSelector, useDispatch } from 'react-redux';

export default function Backdrop(props) {
    // const dispatch = useDispatch();
    // const checkedHandler = () => {
    //   dispatch(toggleBackdropState())
    // }



  return (
    <div>
      <div className={classes.Backdrop} >
      {/* <CFButtonCFButton backdropState={props.backdropState} /> */}
      </div>
    </div>
  )
}
