import React, { useContext, useRef, useState } from 'react';
import "./Effect.css"
import { Link } from 'react-router-dom'
import { InputContext } from '../../../UseContext'
import Draggable from 'react-draggable';
import { MdOutlinePermMedia } from "react-icons/md";
import { TbTextSize } from "react-icons/tb";
import { IoColorFilterOutline } from "react-icons/io5";
import { PiSmileySticker } from "react-icons/pi";

const Effect = () => {
  const { selectedImage, stickers, textColor, filter, setFilter, inputData, fontStyle, fontSizes, stickerPositions, setStickerPositions, textPosition, setTextPosition, } = useContext(InputContext);
  const [localText, setLocalText] = useState(inputData);
  const [localFont, setLocalFont] = useState(fontStyle);
  const imgRef = useRef(null);

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

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const downloadImage = () => {
    const img = imgRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match the image
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Apply the filter to the entire canvas before drawing anything
    ctx.filter = filter;

    // Draw the uploaded image on the canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Render each sticker
    stickers.forEach((sticker, index) => {
      const stickerElement = document.querySelectorAll("img[alt='Sticker']")[index];
      const stickerRect = stickerElement.getBoundingClientRect();
      const imgRect = img.getBoundingClientRect();

      // Calculate relative position within the canvas
      const x = (stickerRect.x - imgRect.x) * (canvas.width / imgRect.width);
      const y = (stickerRect.y - imgRect.y) * (canvas.height / imgRect.height);
      const width = stickerElement.width * (canvas.width / imgRect.width);
      const height = stickerElement.height * (canvas.height / imgRect.height);

      ctx.drawImage(stickerElement, x, y, width, height);
    });

    // Render the text on the canvas 
    const textElement = document.querySelector(".Input-Font-Name");
    const textRect = textElement.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    // Calculate relative position within the canvas
    const textX = (textRect.x - imgRect.x) * (canvas.width / imgRect.width);
    const textY = (textRect.y - imgRect.y) * (canvas.height / imgRect.height) + (fontSizes * (canvas.height / imgRect.height));

    // Scale the font size based on the canvas size
    const scaledFontSize = fontSizes * (canvas.width / imgRect.width);

    ctx.font = `${scaledFontSize}px ${localFont}`;
    ctx.fillStyle = textColor;
    ctx.fillText(localText, textX, textY);

    // Create a download link
    const link = document.createElement("a");
    link.download = "filtered-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="Container">
      <div className="mediapic">
        {selectedImage && <img src={selectedImage} ref={imgRef} alt="Selected media" style={{
          filter,
          fontFamily: localFont,
          fontSize: fontSizes,
        }} />}
        {stickers.map((sticker, index) => (
          <Draggable key={index} position={stickerPositions[index] || { x: 0, y: 0 }}
            onStop={(e, ui) => handleStickerDrag(e, ui, index)} >
            <img
              src={sticker.src}
              alt="Sticker"
              style={{
                position: "relative",
                marginTop: "-450px",
                left: "15%",
                top:"25px",
                height: `${stickerPositions[index]?.height || 100}px`,
                width: `${stickerPositions[index]?.height || 100}px`,
              }}
            />
          </Draggable>
        ))}
        <Draggable position={textPosition} onStop={handleTextDrag}>
          <input
            type="text"
            value={inputData}
            className='Input-Font-Name'
            style={{ position: "absolute", fontFamily: fontStyle, fontSize: `${fontSizes}px`, border: "none", color: textColor }}
            placeholder="Enter text"
          />
        </Draggable>
      </div>
      <div className='Bottom-effect'>
        <div className='EffectGrid'>
          <img className='filter-img' onClick={() => applyFilter('grayscale(100%)')} style={{ filter: 'grayscale(100%)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('sepia(100%)')} style={{ filter: 'sepia(100%)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('opacity(80%)')} style={{ filter: 'opacity(80%)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('blur(3px)')} style={{ filter: 'blur(3px)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('contrast(200%)')} style={{ filter: 'contrast(200%)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('hue-rotate(-0.25turn)')} style={{ filter: 'hue-rotate(-0.25turn)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('brightness(1.2)')} style={{ filter: 'brightness(1.2)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('invert(0.30)')} style={{ filter: 'invert(0.30)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('drop-shadow(0 0 0.75rem crimson)')} style={{ filter: 'drop-shadow(0 0 0.75rem crimson)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('saturate(4)')} style={{ filter: 'saturate(4)' }} src={selectedImage} alt="" />
          <img className='filter-img' onClick={() => applyFilter('')} src={selectedImage} alt="" />
        </div>
        <hr />
        <button onClick={downloadImage} class="buttons" ><span>Download</span></button>
        <hr />
        <div className="Controls-effect">
          <div className="Control-effect">
            <div className="icon-wrapper-effect">
              <MdOutlinePermMedia size={25} />
            </div>
            <button className='effect-bottom-btn'><Link to="/Media">Media</Link> </button>
          </div>
          <div class="separator"></div>
          <div className="Control-effect">
            <div className="icon-wrapper-effect">
              <TbTextSize size={25} />
            </div>
            <button className='effect-bottom-btn'><Link to="/FontName">Text</Link> </button>
          </div>
          <div class="separator"></div>
          <div className="Control-effect">
            <div className="icon-wrapper-effect">
              <PiSmileySticker size={35} />
            </div>
            <button className='effect-bottom-btn'><Link to="/Skicter">Skicter</Link> </button>
          </div>
          <div class="separator"></div>
          <div className="Control-effect">
            <div className="icon-wrapper-effect">
              <IoColorFilterOutline size={35} />
            </div>
            <button className='effect-bottom-btn'><Link to="/Effect">Effect</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Effect