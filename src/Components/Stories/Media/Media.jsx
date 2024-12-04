import { InputContext } from '../../../UseContext'
import { FaLeftLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import React, { useContext, useRef, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom'
import "./Media.css"
import { FaArrowRotateRight } from "react-icons/fa6";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
function Media() {
    const { selectedImage, setSelectedImage, setStickers, setFilter, setShowMediapic, setInputData } = useContext(InputContext);
    const [rotation, setRotation] = useState(0)
    const [crop, setCrop] = useState(null)
    const [completeCrop, setCompleteCrop] = useState(null)
    const [height, setHeight] = useState('')
    const [width, setWidth] = useState('')
    const [scale, setScale] = useState(1)
    const Refs = useRef(null)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
            setStickers([]);
            setInputData('')
            setFilter('');
            setRotation(0)
        };
        if (file) {
            reader.readAsDataURL(file);
            setShowMediapic(false);
        }
    };

    const openFileDialog = () => {
        document.getElementById('fileInput').click();
    };

    const onImageLoad = (e) => {
        setHeight(e?.currentTarget?.height)
        setWidth * (e?.currentTarget?.width)
        setCompleteCrop({
            x: 0,
            y: 0,
            height: e?.currentTarget?.height,
            width: e?.currentTarget?.width,
            unit: "px"
        })
    }

    const onZoom = (e) => {
        setScale(parseFloat(e))
    }

    const rotate = (e) => {
        let newRotation = rotation + 90
        if (newRotation >= 360) {
            newRotation = -360
        }
        setRotation(newRotation)
    }

    const getCroppedImage = async () => {
        if (!Refs.current || !completeCrop) {
            return;
        }
    
        const image = Refs.current;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
    
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
    
        canvas.width = completeCrop.width;
        canvas.height = completeCrop.height;
    
        // Apply rotation and scaling
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(scale, scale);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
    
        // Draw the cropped image
        ctx.drawImage(
            image,
            completeCrop.x * scaleX,
            completeCrop.y * scaleY,
            completeCrop.width * scaleX,
            completeCrop.height * scaleY,
            0,
            0,
            completeCrop.width,
            completeCrop.height
        );
        
        ctx.restore();
    
        // Convert canvas to a data URL (or blob if needed)
        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                }
                resolve(blob);
            }, 'image/jpeg');
        });
    };
    

    const handleSubmit = async () => {
        const croppedImage = await getCroppedImage();
        if (croppedImage) {
            // Use React Router to navigate and pass the cropped image to the next component
            const fileUrl = URL.createObjectURL(croppedImage);
            setSelectedImage(fileUrl); // Optional: Update context with the final image
        }
    };

    return (
        <div className="Container">
            <header className="header-btn" >
                {/* <button className="nav-btn"><Link to={"/"}><FaLeftLong style={{ marginLeft: "-10px", color: "whitesmoke" }} /></Link></button> */}
            </header>
            <div className="mediapic">
                <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={(e) => {
                    if (e.height == 0 || e.width == 0) {
                        setCompleteCrop({
                            x: 0, y: 0, height: height, width: 0, unit: "px"
                        })
                    } else {
                        setCompleteCrop(e)
                    }
                }}>
                    {selectedImage && <img src={selectedImage} alt="Selected media" onLoad={onImageLoad} ref={Refs} style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }} />}
                </ReactCrop>
                {/* {selectedImage && <img src={selectedImage} alt="Selected media" />} */}
                <div className='upload-new-pic'>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
            </div>
            <div className='Bottom-media'>
                <div style={{textAlign:"center"}}>
                <span style={{color: 'whitesmoke', paddingRight:"10px", }}>ZoomIN / ZoomOut</span>
                <input
                    type='range'
                    min={0.1}
                    style={{marginTop:"20px"}}
                    max={3}
                    step={0.05}
                    value={scale}
                    onInput={(e) => {
                        onZoom(e.target.value)
                    }}
                    className={"slider"}
                />
                <hr />
                </div>
                <div style={{textAlign:"center"}}>
                    <span style={{color:"whitesmoke", paddingRight:"10px"}} >Rotation</span>
                    <FaArrowRotateRight className='icon' onClick={rotate} color='white' size={22} />
                </div>
                <div className="Controls-media">
                    <div className="Control-media">
                        <Link to={"/"}>
                            <IoMdClose size={30} color='white' />
                        </Link>
                    </div>
                    <button className='media-dailog-btn' onClick={openFileDialog}>
                        <svg
                            aria-hidden="true"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-width="2"
                                stroke="#fffffff"
                                d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                            <path
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2"
                                stroke="#fffffff"
                                d="M17 15V18M17 21V18M17 18H14M17 18H20"
                            ></path>
                        </svg>
                        ADD FILE
                    </button>
                    <div className="Control-media">
                        <Link to={"/FontName"}  onClick={handleSubmit}>
                            <FaCheck size={25} color='white' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Media