import React from 'react'
import UnopDropdown from "unop-react-dropdown"
import "../css/dashboard.css"
import menuImg from "../img/icon/icon-menu.png"
import closeImg from "../img/icon/close.png"
function Dropdown() {
    function displayClose() {
        document.getElementById("menuIcon").style.display = "none"
        document.getElementById("closeIcon").style.display = "block"
    }
    function displayMenu() {
        document.getElementById("menuIcon").style.display = "block"
        document.getElementById("closeIcon").style.display = "none"
    }
    return (
        <UnopDropdown trigger={<div className='option'>
            <img id="menuIcon" onClick={() => displayClose()} style={{ height: "30px", marginTop: "-7.5px" }} src={menuImg} />
            <img id="closeIcon" onClick={() => displayMenu()} style={{ height: "30px", marginTop: "-7.5px", display: "none" }} src={closeImg} />
        </div>}>
            <div className="dropdown-item">
                <div className="item-dd">自分の記録</div>
            </div>
            <div className="line-dd"></div>
            <div className="dropdown-item">
                <div className="item-dd">自分の記録</div>
            </div>
            <div className="line-dd"></div>
            <div className="dropdown-item">
                <div className="item-dd">体重グラフ</div>
            </div>
            <div className="line-dd"></div>

            <div className="dropdown-item">
                <div className="item-dd">目標</div>
            </div>
            <div className="line-dd"></div>

            <div className="dropdown-item">
                <div className="item-dd">選択中のコース</div>
            </div>
            <div className="line-dd"></div>

            <div className="dropdown-item">
                <div className="item-dd">コラム一覧</div>
            </div>
            <div className="line-dd"></div>

            <div className="dropdown-item">
                <div className="item-dd">設定</div>
            </div>
        </UnopDropdown>
    )
}

export default Dropdown