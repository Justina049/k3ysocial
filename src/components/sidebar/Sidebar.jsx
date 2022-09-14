import React from 'react'
import "./Sidebar.css"
import { Bookmark, ChatSharp, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatSharp className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/f1.jpg" alt=""/>
            <span className="sidebarFriendName">Mary Daniels</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/m2.jpg" alt=""/>
            <span className="sidebarFriendName">Noah Liam</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/m5.jpg" alt=""/>
            <span className="sidebarFriendName">Lucas Morris</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/f4.jpg" alt=""/>
            <span className="sidebarFriendName">Grace clark</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/m3.jpg" alt=""/>
            <span className="sidebarFriendName">Henry Troy</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/f3.jpg" alt=""/>
            <span className="sidebarFriendName">Anisa Jean</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/f2.jpg" alt=""/>
            <span className="sidebarFriendName">Rose Fredick</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/m1.jpg" alt=""/>
            <span className="sidebarFriendName">Kelvin Cole</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/m4.jpg" alt=""/>
            <span className="sidebarFriendName">George Eli</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/f5.jpg" alt=""/>
            <span className="sidebarFriendName">Kate Shawn</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/f6.jpg" alt=""/>
            <span className="sidebarFriendName">Hannah Lewis</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/m9.jpg" alt=""/>
            <span className="sidebarFriendName">Kelvin Cole</span>
          </li>
        </ul>

      </div>
    </div>
  )
}
