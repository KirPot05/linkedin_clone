import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";


function Sidebar() {

    const recentItem = (topic) => (
        <div class="sidebar__recentItem">
            <span class="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">

            <div class="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="" />
                <Avatar className="sidebar__avatar" />

                <h2>Kiran Potdar</h2>
                <h4>potdarkiran93@gmail.com</h4>
            </div>

            <div class="sidebar__stats">

                <div class="sidebar__stat">
                    <p>Who Viewed You? </p>
                    <p class="sidebar__statNumber">2,564</p>
                </div>

                <div class="sidebar__stat">
                    <p> Views on post </p>
                    <p class="sidebar__statNumber">1,353</p>
                </div>
            </div>

            <div class="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('nextjs')}
                {recentItem('solidity')}
                {recentItem('MERN')}
                {recentItem('softwareengineering')}
            </div>

        </div>
    )
}

export default Sidebar