import React, { useContext, useState, useRef } from 'react';
import { InputContext } from '../../../UseContext';
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable';
import "./Font_name.css"
import { FaLeftLong } from "react-icons/fa6";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbTextSize } from "react-icons/tb";
import { IoColorFilterOutline } from "react-icons/io5";
import { PiSmileySticker } from "react-icons/pi";

const Font_name = () => {
    const { selectedImage, inputData, setInputData, fontStyle, setFontStyle, fontSizes, setFontSizes, textPosition, setTextPosition, textColor, setTextColor } = useContext(InputContext)
    const [localText, setLocalText] = useState(inputData);
    const [localFont, setLocalFont] = useState(fontStyle);
    const [localColor, setLocalColor] = useState(textColor);

    const handleTextChange = (e) => {
        setLocalText(e.target.value);
    };

    const handleFontChange = (font) => {
        setLocalFont(font);
    };

    const handleColorChange = (color) => {
        setLocalColor(color)
    };

    const handleSave = () => {
        setInputData(localText);
        setFontStyle(localFont);
        setTextColor(localColor);
    };
    const handleSliderChange = (event) => {
        setFontSizes(event.target.value)
        setFontSizes({
            ...fontSizes,
            [fontSizes]: value
        })
    };

    const handleTextDrag = (e, ui) => {
        const { x, y } = ui;
        setTextPosition({ x, y });
    };

    const fonts = ['Arial', 'Courier New', 'Rockwell', 'fantasy', 'cursive', 'serif', 'Gill Sans', 'sans-serif', 'system-ui', 'fangsong', 'math'];
    const colors = ['#ffffff', '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#A9A9A9', '#800000', '#808000', '#008080', '#800080', '#000080', '#C0C0C0', '#CD5C5C', '#FFA07A',];
    return (
        <div className="Container">
            <header className="header-btn">
                <button className="nav-btn"><Link to={"/Media"}><FaLeftLong style={{ marginLeft: "-10px", color: "whitesmoke" }} /></Link></button>
            </header>
            <div className="mediapic">
                {selectedImage && <img className='bgimg' src={selectedImage} alt="Selected media" />}
                <Draggable position={textPosition} onStop={handleTextDrag}>
                    <input
                        type="text"
                        value={localText}
                        onChange={handleTextChange}
                        className='Input-Font-Name'
                        style={{ position: "absolute", fontFamily: localFont, fontSize: `${fontSizes}px`, border: "3px dotted white", color: localColor, }}
                        placeholder="Enter text"
                    />
                </Draggable>
            </div>
            <div className='Bottom_Text'>
                <div className="toolbar">
                    <div className="color-selection">
                        {colors.map((color) => (
                            <button
                                className='colors'
                                key={color}
                                onClick={() => handleColorChange(color)}
                                style={{
                                    backgroundColor: color,
                                }}
                            />
                        ))}
                    </div>
                </div>
                <hr />
                <div className="toolbar">
                    <div className="font-selection">
                        <div>
                            {fonts.map((font) => (
                                <button
                                    key={font}
                                    className='fonts'
                                    onClick={() => handleFontChange(font)}
                                    style={{
                                        fontFamily: font,
                                        border: localFont === font ? '2px solid #748d92' : '1px solid #d3d9d4',
                                        backgroundColor: localFont === font ? '#d3d9d4' : '#748d92',
                                    }}
                                >
                                    {font}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div class="slider-container">
                    <input
                        class="slider"
                        type="range"
                        min="10"
                        max="60"
                        value={fontSizes}
                        style={{ width: "85%" }}
                        onChange={handleSliderChange}
                    />
                </div>
                <hr />
                <div className="Controls-text">
                    <div className="Control-text">
                        <div className="icon-wrapper">
                            <MdOutlinePermMedia size={25} />
                        </div>
                        <button className='text-bottom-btn'><Link to="/Media">Media</Link> </button>
                    </div>
                    <div class="separator"></div>
                    <div className="Control-text">
                        <div className="icon-wrapper">
                            <TbTextSize size={25} />
                        </div>
                        <button className='text-bottom-btn'><Link to="/FontName" onClick={handleSave}>Text</Link> </button>
                    </div>
                    <div class="separator"></div>
                    <div className="Control-text">
                        <div className="icon-wrapper">
                            <PiSmileySticker size={35} />
                        </div>
                        <button className='text-bottom-btn'><Link to="/Skicter" onClick={handleSave}>Skicter</Link> </button>
                    </div>
                    <div class="separator"></div>
                    <div className="Control-text">
                        <div className="icon-wrapper">
                            <IoColorFilterOutline size={35} />
                        </div>
                        <button className='text-bottom-btn'><Link to="/Effect" onClick={handleSave}>Effect</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Font_name