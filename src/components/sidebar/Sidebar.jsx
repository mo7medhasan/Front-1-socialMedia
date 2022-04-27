import "./sidebar.css";
import { RssFeed,Chat,SlowMotionVideo,Group,Bookmarks,HelpOutline,WorkOutlineOutlined
,EventOutlined,School} from "@mui/icons-material";

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <SlowMotionVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Course</span>
          </li>
        </ul>
        <button className="sidebarButton">
            Show More            
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
         {Users.map((u)=>(<CloseFriend  key={u.id} user={u} />))
           }
            
        </ul>
      </div>
    </div>
  );
}
