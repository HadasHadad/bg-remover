import React from 'react'
import '../css/BgRemoveMain.css'

export default function BgRemoveMain() {
  return (
    <div>
        <div className='bg-container'>
            <div className='header'>
                <div className='header-title'>העלאת תמונה לצורך הסרת רקע</div>
                <button className='upload-btn'>
                    
                    העלאת תמונה</button>
                <div className='header-subtext'>png, jpeg - פורמטים נתמכים </div>

            </div>
        </div>
    </div>
  )
}
