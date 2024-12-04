import React, { useState, useContext } from 'react';
import accidentemoji from "../../../../public/imges/emojies/accidentemoji.svg";
import Anglesmile from "../../../../public/imges/emojies/anglesmile2.png";
import chumiEmoji from "../../../../public/imges/emojies/chumiEmoji.svg";
import coolemoji from "../../../../public/imges/emojies/coolemoji.svg";
import crying from "../../../../public/imges/emojies/crying.svg";
import emoji from "../../../../public/imges/emojies/emoji.svg";
import emotional from "../../../../public/imges/emojies/emotional.svg";
import eyeblinkemoji from "../../../../public/imges/emojies/eyeblinkemoji.svg";
import funny from "../../../../public/imges/emojies/funny.svg";
import funsmile from "../../../../public/imges/emojies/funsmile.svg";
import greenface from "../../../../public/imges/emojies/greenface.svg";
import gussa from "../../../../public/imges/emojies/gussa.svg";
import gussaemoji from "../../../../public/imges/emojies/gussaemoji.svg";
import haaaaaaan from "../../../../public/imges/emojies/haaaaaaan.svg";
import handemoji from "../../../../public/imges/emojies/handemoji.svg";
import happy from "../../../../public/imges/emojies/happy.svg";
import heart from "../../../../public/imges/emojies/heart.svg";
import heartineyes from "../../../../public/imges/emojies/heartineyes.svg";
import herangiemoji from "../../../../public/imges/emojies/herangiemoji.svg";
import hororemoji from "../../../../public/imges/emojies/hororemoji.svg";
import noeye from "../../../../public/imges/emojies/noeye.svg";
import sad from "../../../../public/imges/emojies/sad.svg";
import sademotional from "../../../../public/imges/emojies/sademotional.svg";
import sadness from "../../../../public/imges/emojies/sadness.svg";
import sheetan from "../../../../public/imges/emojies/sheetan.svg";
import shysmile4 from "../../../../public/imges/emojies/shysmile4.png";
import star from "../../../../public/imges/emojies/star.svg";
import thoughtemoji from "../../../../public/imges/emojies/thoughtemoji.svg";
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { InputContext } from '../../../UseContext';
import { FaLeftLong } from "react-icons/fa6";
import "./Stiker.css";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbTextSize } from "react-icons/tb";
import { IoColorFilterOutline } from "react-icons/io5";
import { PiSmileySticker } from "react-icons/pi";

export const Sticker = () => {
  const { selectedImage, stickers, textColor, setStickers, filter, inputData, fontStyle, fontSizes, stickerPositions, setStickerPositions, textPosition, setTextPosition, } = useContext(InputContext);
  const [stickerSizes, setStickerSizes] = useState({});

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [stickersToDelete, setStickersToDelete] = useState([]);


  const addSticker = (stickerSrc) => {
    const newSticker = {
      src: stickerSrc,
      size: 100 // Default size for new stickers
    };
    setStickers([...stickers, newSticker]);
    setStickerSizes({ ...stickerSizes, [stickerSrc]: 100 }); // Initialize size for new sticker
  };

  const handleTextDrag = (e, ui) => {
    const { x, y } = ui;
    console.log("Text Position:", x, y);
    setTextPosition({ x, y });
  };

  const handleStickerDrag = (e, ui, index) => {
    const { x, y } = ui;
    setStickerPositions(prevPositions => ({
      ...prevPositions,
      [index]: { x, y }
    }));
  };


  // for delete all sticker on the click of del btn
  // start
  const deleteAllStickers = () => {
    setStickers([]); // Clear the stickers array
    setStickerPositions({}); // Clear the sticker positions
  };

  // end



// for del sticker with seletion in dailog box

// start
  const openConfirmDialog = () => {
    setStickersToDelete(stickers);
    setShowConfirmDialog(true);
  };


  const handleDeleteSelected = () => {
    const stickersToKeep = stickers.filter(sticker => !stickersToDelete.includes(sticker));
    setStickers(stickersToKeep);
    setStickerPositions(prevPositions =>
      Object.keys(prevPositions)
        .filter(key => !stickersToDelete.includes(stickers[key]))
        .reduce((obj, key) => {
          obj[key] = prevPositions[key];
          return obj;
        }, {})
    );
    setShowConfirmDialog(false);
  };

// end

  return (
    <div className="Container">
      <header className="header-btn">
        <button className="nav-btn"><Link to={"/FontName"}><FaLeftLong style={{ marginLeft: "-10px", color: "whitesmoke" }} /></Link></button>
      </header>
      <div className="mediapic" >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
          />
        )}
        {stickers.map((sticker, index) => (
          <Draggable
            key={index}
            position={stickerPositions[index] || { x: 0, y: 0 }}
            onStop={(e, ui) => handleStickerDrag(e, ui, index)}
          >
            <img
              src={sticker.src}
              alt="Sticker"
              style={{
                position: "relative",
                marginTop: "-400px",
                left: "15%",
                height: `${stickerSizes[sticker.src] || 100}px`,
                width: `${stickerSizes[sticker.src] || 100}px`
              }}
            />
          </Draggable>
        ))}
        <Draggable position={textPosition} onStop={handleTextDrag}>
          <input
            type="text"
            value={inputData}
            className='Input-Font-Name'
            style={{ position: "absolute", fontFamily: fontStyle, width: "90%", fontSize: `${fontSizes}px`, border: "none", color: textColor }}
            placeholder="Enter text"
          />
        </Draggable>
      </div>
      <div className='Bottom-sticker'>
        <div className="stickers">
          <div >
            <button className='emojistyle' onClick={() => addSticker(accidentemoji)}>🤕</button>
            <button className='emojistyle' onClick={() => addSticker(Anglesmile)}>😇</button>
            <button className='emojistyle' onClick={() => addSticker(chumiEmoji)}>😘</button>
            <button className='emojistyle' onClick={() => addSticker(coolemoji)}>😎</button>
            <button className='emojistyle' onClick={() => addSticker(crying)}>😭</button>
            <button className='emojistyle' onClick={() => addSticker(emoji)}>🙂</button>
            <button className='emojistyle' onClick={() => addSticker(emotional)}>😟</button>
            <button className='emojistyle' onClick={() => addSticker(eyeblinkemoji)}>😉</button>
            <button className='emojistyle' onClick={() => addSticker(funny)}>😝</button>
            <button className='emojistyle' onClick={() => addSticker(funsmile)}>😂</button>
            <button className='emojistyle' onClick={() => addSticker(greenface)}>🤢</button>
            <button className='emojistyle' onClick={() => addSticker(gussa)}>😡</button>
            <button className='emojistyle' onClick={() => addSticker(gussaemoji)}>😠</button>
            <button className='emojistyle' onClick={() => addSticker(haaaaaaan)}>😮</button>
            <button className='emojistyle' onClick={() => addSticker(handemoji)}>👍</button>
            <button className='emojistyle' onClick={() => addSticker(happy)}>😃</button>
            <button className='emojistyle' onClick={() => addSticker(heart)}>❤️</button>
            <button className='emojistyle' onClick={() => addSticker(heartineyes)}>😍</button>
            <button className='emojistyle' onClick={() => addSticker(herangiemoji)}>😧</button>
            <button className='emojistyle' onClick={() => addSticker(hororemoji)}>😱</button>
            <button className='emojistyle' onClick={() => addSticker(noeye)}>😵</button>
            <button className='emojistyle' onClick={() => addSticker(sad)}>😥</button>
            <button className='emojistyle' onClick={() => addSticker(sademotional)}>😞</button>
            <button className='emojistyle' onClick={() => addSticker(sadness)}>😫</button>
            <button className='emojistyle' onClick={() => addSticker(sheetan)}>😈</button>
            <button className='emojistyle' onClick={() => addSticker(shysmile4)}>😊</button>
            <button className='emojistyle' onClick={() => addSticker(thoughtemoji)}>🙄</button>
            <button className='emojistyle' onClick={() => addSticker(star)}>⭐</button>
          </div>
        </div>
        <hr />


        {/* for del sticker on one click */}

        {/* <div className="delete-btn" onClick={deleteAllStickers}>
          <h5>Delete Sticker</h5>
          <button class="del-button">
            <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
          </button>
        </div> */}


{/* code for del selected sticker in dailog box  */}
        <div className="delete-btn">
          <h5>Delete Sticker</h5>
          <button className="del-button" onClick={openConfirmDialog}>
            <svg viewBox="0 0 448 512" className="svgIcon">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        </div>

        {/* Confirmation Dialog */}

        {showConfirmDialog && (
          <div className="confirm-dialog" >
            <h3>Select stickers to delete:</h3>
            {stickers.map((sticker, index) => (
              <div key={index}>
                
                <input
                  type="checkbox"
                  style={{
                    top: "10px",
                    position: 'relative',
                    margin: '10px',
                    }}
                  checked={stickersToDelete.includes(sticker)}
                  onChange={() => {
                    setStickersToDelete(prev =>
                      prev.includes(sticker)
                        ? prev.filter(item => item !== sticker)
                        : [...prev, sticker]
                    );
                  }}
                />
                <img src={sticker.src} alt="Sticker" style={{ width: 50, height: 50 }} />
              </div>
            ))}
            <button onClick={handleDeleteSelected}>Delete Selected</button>
            <button onClick={() => setShowConfirmDialog(false)}>Cancel</button>
          </div>
        )}
        <hr />
        <div className="Controls-sticker">
          <div className="Control-sticker">
            <div className="icon-wrapper-sticker">
              <MdOutlinePermMedia size={25} />
            </div>
            <button className='sticker-bottom-btn'><Link to="/Media">Media</Link> </button>
          </div>
          <div class="separator"></div>
          <div className="Control-sticker">
            <div className="icon-wrapper-sticker">
              <TbTextSize size={25} />
            </div>
            <button className='sticker-bottom-btn'><Link to="/FontName">Text</Link> </button>
          </div>
          <div class="separator"></div>
          <div className="Control-sticker">
            <div className="icon-wrapper-sticker">
              <PiSmileySticker size={35} />
            </div>
            <button className='sticker-bottom-btn'><Link to="/Skicter">Skicter</Link> </button>
          </div>
          <div class="separator"></div>
          <div className="Control-sticker">
            <div className="icon-wrapper-sticker">
              <IoColorFilterOutline size={35} />
            </div>
            <button className='sticker-bottom-btn'><Link to="/Effect">Effect</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};
