
import React from 'react'
import '../css/ImageDownload.css'
import newImg from '../assets/icons/new.png'

export default function ImageDownload(props) {
  return (
    
        <div className='img-download-container' style = {{borderBottom: (props.borderFlag ? "1px solid #9e9e9ea8": "")}}>
        <div className='download-title'>
            {props.imageFlag ? <img className='new-img' src={newImg} alt="new" /> :""}
           
            {props.title}</div>
        <div className='download-subtext'>{props.subtext} </div>
        <button className='download-btn'>{props.btnText}</button>
        <div className='download-info'>{props.info}</div>
        </div>
    
  )
}
