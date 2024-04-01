import React from 'react'
import '../css/BgRemoveMain.css'
import uploadIcon from '../assets/icons/Upload.png'
import closeIcon from '../assets/icons/close.png'
import logo from '../assets/images/logo.png'
import banner from '../assets/images/banner.png'
import ImageDownload from './ImageDownload'

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
            <div className='main'>
                <div className='main-display'>
                    <div className='display-states'>
                        <div className='btn-no-bg'>הוסר רקע</div>
                        <div className='btn-og'>מקורי</div>
                    </div>
                    <div className='display-middle'></div>
                    <div className='display-permission'>
                        <div className='permission-text'>על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן על ידי מדיניות הפרטיות ותנאי השירות שלנו</div>
                        <button className='permission-btn'>תקנון החברה</button>
                    </div>
                </div>
                <div className='main-control'>
                    <ImageDownload title = "תמונה חינם" subtext="תצוגה מקדימה של תמונה 408*612" btnText="הורד" info="איכות טובה עד 0.25 מגה פיקסל" borderFlag={true} imageFlag={false}/>
                    <ImageDownload title = "Pro" subtext="תמונה מלאה  1920*1280" btnText="HD הורד" info="האיכות הטובה ביותר עד 25 מגה פיקסל" borderFlag={false} imageFlag={true}/>
                </div>
            </div>
            <footer className='footer'></footer>
            <img src={logo} alt="logo" className='footer-logo' />
            <img src={banner} alt="banner" className='footer-banner' />
        </div>
    </div>
  )
}
