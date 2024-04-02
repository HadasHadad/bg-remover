import React from 'react'
import "../css/ImageDisplay.css"
import { useRef } from 'react'


export default function ImageDisplay(props) {
    const colorInput= useRef();
    const clickInput = () => {
        colorInput.current.click();
    }
    console.log(props.imageOg)
  return (
    <div>
        {props.imageOg === false ? 
      <div className="image-edit">
        <div className="download-reminder">
          אל תשכח להוריד את הקבצים שלך. הם יימחקו אוטומטית כשתצא מהדף
        </div>
        <button className="change-bg-btn" onClick={clickInput}>
          <input type="color" className="input-color" ref={colorInput} />
          צבע רקע
        </button>
      </div>
:<>
<div className='margin-imgOg'></div>
</>}
      <div className="current-img">image</div>
    </div>
  );
}
