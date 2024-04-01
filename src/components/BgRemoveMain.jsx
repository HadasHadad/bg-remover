import React from 'react'
import '../css/BgRemoveMain.css'
import uploadIcon from '../assets/icons/Upload.png'
import closeIcon from '../assets/icons/close.png'

export default function BgRemoveMain() {
  return (
    <div>
        <div className='bg-container'>
            <div className='header'>
                <img src={closeIcon} alt="close icon" className='close-icon' />
                <div className='header-title'>העלאת תמונה לצורך הסרת רקע</div>
                <button className='upload-btn'>
                    <div className='btn-text'>העלאת תמונה</div>
                    <img src={uploadIcon} alt="upload icon" className='btn-icon' />
                    </button>
                <div className='header-subtext'>png, jpeg - פורמטים נתמכים </div>

            </div>
        </div>
    </div>
  )
}
