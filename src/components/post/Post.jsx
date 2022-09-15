import { MoreVert } from '@mui/icons-material'
import React from 'react'
import "./Post.css"


export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/g4.jpg" alt="" />
                    <span className="postUsername">Daniel Nicholas</span>
                    <span className="postDate">6 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">hello! so happy to be here</span>
                <img className="postImg" src="assets/c2.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img className="likeIcon" src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">39 people like it</span>
                </div>
                <div className="postbottomRight">
                    <span className="postCommentText">12 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
