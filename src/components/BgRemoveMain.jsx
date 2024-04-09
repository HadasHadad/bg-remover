import React, { useState , useRef } from "react";
import "../css/BgRemoveMain.css";
import uploadIcon from "../assets/icons/Upload.png";
import closeIcon from "../assets/icons/close.png";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/banner.png";
import ImageDownload from "./ImageDownload";
import ImageDisplay from "./ImageDisplay";
import closeGray from "../assets/icons/close1.png"
import downloadFolder from "../assets/icons/Downloads Folder.png"
import notRobot from '../assets/icons/not_robot.png'

export default function BgRemoveMain() {
  const [imgState, setImgState] = useState("btn-og");
  const [open_popup, setopen_popup] = useState(false);
  const [open_popup_download, setopen_popup_download] = useState(false);

  const handleImgState = (className) => {
    setImgState(className);
  };

  const imgUpload = useRef();
    const imgInput = () => {
        imgUpload.current.click();
    }

    function openTakanon (){
        setopen_popup(true);
    }
    function closeTakanon (){
        setopen_popup(false);
    }
    function openDownload (){
        setopen_popup_download(true);
    }
    function closeDownload (){
        setopen_popup_download(false);
    }


  return (
    <div className="bg-container">
      <div className="header">
        <img src={closeIcon} alt="close icon" className="close-icon" />
        <div className="header-title">העלאת תמונה לצורך הסרת רקע</div>
        <button className="upload-btn" onClick={imgInput}>
          <div className="btn-text">העלאת תמונה</div>
          <img src={uploadIcon} alt="upload icon" className="btn-icon" />
          <input
            type="file"
            name="img_uploded"
            id="uploadedImg"
            ref={imgUpload}
            className="img-upload"
          />
        </button>
        <div className="header-subtext">png, jpeg - פורמטים נתמכים </div>
      </div>
      <div className="main">
        <div className="main-display">
          <div className="display-states">
            <div
              className={`btn-no-bg ${
                imgState === "btn-no-bg" ? "state-line" : ""
              }`}
              onClick={() => handleImgState("btn-no-bg")}
            >
              הוסר רקע
            </div>
            <div
              className={`btn-og ${imgState === "btn-og" ? "state-line" : ""}`}
              onClick={() => handleImgState("btn-og")}
            >
              מקורי
            </div>
          </div>
          <div className="display-middle">
            {imgState === "btn-og" ? (
              <ImageDisplay imageOg={true} />
            ) : (
              <ImageDisplay imageOg={false} />
            )}
          </div>
          <div className="display-permission">
            <div className="permission-text">
              על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן על
              ידי מדיניות הפרטיות ותנאי השירות שלנו
            </div>
            <button className="permission-btn" onClick={openTakanon}>
              תקנון החברה
            </button>
          </div>
        </div>
        <div className="main-download">
          <ImageDownload
          openPopup = {openDownload}
            title="תמונה חינם"
            subtext="תצוגה מקדימה של תמונה 408*612"
            btnText="הורד"
            info="איכות טובה עד 0.25 מגה פיקסל"
            borderFlag={true}
            imageFlag={false}
          />
          <ImageDownload
            openPopup = {openDownload}
            title="Pro"
            subtext="תמונה מלאה  1920*1280"
            btnText="HD הורד"
            info="האיכות הטובה ביותר עד 25 מגה פיקסל"
            borderFlag={false}
            imageFlag={true}
          />
        </div>
      </div>
      <footer className="footer"></footer>
      <img src={logo} alt="logo" className="footer-logo" />
      <img src={banner} alt="banner" className="footer-banner" />

      {open_popup ? (
        <>
          <div className="takanon-overlay"> </div>
          <div className="takanon-popup">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita ad, quisquam explicabo qui exercitationem vitae et
            laboriosam placeat dolore praesentium blanditiis minima maxime
            magni, ullam non totam molestias quaerat excepturi! Quidem rerum
            eaque dolor quae nobis, voluptates laboriosam consectetur, esse
            ullam tenetur debitis saepe sapiente quo molestiae nam dolores, ipsa
            incidunt consequuntur. Illo dolorem, aspernatur, necessitatibus
            dolor sapiente praesentium facilis maiores ea repellat, beatae
            eligendi rerum dignissimos? Ea eveniet quibusdam tenetur eius
            debitis voluptates distinctio animi, consequatur enim fuga repellat
            necessitatibus, obcaecati aliquid aliquam commodi tempore. Neque,
            sed dignissimos nemo quos accusantium eaque animi repellendus ipsam
            tempora ducimus odit quo a eveniet quidem nisi culpa aliquid fugiat
            eligendi corporis. Asperiores autem mollitia placeat eveniet
            exercitationem nulla! Voluptas, a. Debitis eos sit nemo nostrum
            sequi, veniam iste ducimus sint beatae placeat quibusdam voluptatum
            quae harum quos odio culpa aliquam impedit expedita ut sunt aut
            quidem tempore sed eveniet. Molestiae ratione numquam alias placeat
            debitis aspernatur delectus labore, optio unde sunt tempora. A
            molestias laborum perspiciatis eos ipsam animi modi recusandae
            quaerat quae cupiditate. Nam ullam, eligendi, fugiat explicabo
            delectus ab odio vitae cumque repudiandae deserunt odit magni.
            Reprehenderit sequi minus excepturi recusandae necessitatibus, iusto
            rerum porro officia aut exercitationem asperiores?
            <img
              src={closeIcon}
              alt="close"
              className="takanon-close-icon"
              onClick={closeTakanon}
            />
          </div>
        </>
      ) : (
        ""
      )}
{open_popup_download ? 
        <>
      <div className="download-popup-overlay"> </div>
      <div className="download-popup">
        <div className="download-folder-img">
          <img src={downloadFolder} alt="download-folder" />
        </div>
        <img src={closeGray} alt="close" className="close-download-btn" onClick={closeDownload}/>
        <div className="download-popup-title">אישור להורדת התמונה</div>
        <div className="download-popup-subtitle">?האם להוריד את התמונה</div>
        <div className="not-robot">
        <img src={notRobot} alt="not-robot" className="not-robot-icon" />
          <span>אני לא רובוט</span>
          <input type="checkbox" name="downloadIsRobot" id="is_robot" />
        
        </div>
        <button className="download-confirm">אישור</button>
        <button className="download-cancel" onClick={closeDownload}>ביטול</button>
      </div>
      </>
      : ""}
    </div>
  );
}
