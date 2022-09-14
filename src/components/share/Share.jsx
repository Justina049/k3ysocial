import React from 'react';
import "./Share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/g2.jpg" alt="" className="shareProfileImg" /> 
                {/* <img src="/assets/m1.jpg" alt="" className="topbarImg" /> */}
                <input
                placeholder="What's on your mind?"
                className="shareInput"
                />
            </div>
            <hr className="shareHr" />
            <div className="shareButtom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
