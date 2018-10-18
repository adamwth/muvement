import {Icon} from "antd";
import React from 'react';

const EditInnerSvg = () => (
  <svg viewBox="0 0 26.677 26.677" data-icon="undo" width="1em" height="1em"
       fill="currentColor" aria-hidden="true" x="0px" y="0px">
    <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
		C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
		L27.473,390.597L0.3,512.69z"/>
  </svg>
);

const EditIcon = props => (
  <Icon component={EditInnerSvg} {...props}/>
);

export default EditIcon;