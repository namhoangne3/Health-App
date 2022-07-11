import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../img/small_logo.png"
import memoImg from "../img/icon/icon-memo.png"
import challengeImg from "../img/icon/icon-challenge.png"
import newImg from "../img/icon/icon-news.png"
import menuImg from "../img/icon/icon-menu.png"
import closeImg from "../img/icon/close.png"
import { CardHeader, Card, CardBody } from "reactstrap";
import Dashboard from "./Dashboard";
import "../css/dashboard.css"
import MyRecord from "./MyRecord";
import Column from "./Column";
import UnopDropdown from "unop-react-dropdown"

const DashboardPage = () => {

	function displayClose(){
		document.getElementById("menuIcon").style.display="none"
		document.getElementById("closeIcon").style.display="block"
	}
	function displayMenu(){
		document.getElementById("menuIcon").style.display="block"
		document.getElementById("closeIcon").style.display="none"
	}
	if(window.location.href === "http://localhost:3001/" || window.location.href === "http://localhost:3001"){
		window.location.href = "http://localhost:3001/home"
	}
	return (
		<div id='dashboard-body' className='dashboard' style={{ border: "1px solid black" }}>
			<Card>
				<CardHeader className='dashboard-header'>
					<Link to={`/home`}><div className='logo'><img className='img_logo' src={logo} alt="" /></div></Link><div style={{ width: "25%" }}></div>
					<img className='icon-header-dashboard' src={memoImg} /><div className='record'><Link to={`/myrecords`}>&nbsp;&nbsp;自分の記録</Link></div>
					<img className='icon-header-dashboard' src={challengeImg} /><div className='challenge'><Link to={`/challenge`}>&nbsp;&nbsp;&nbsp;&nbsp;チャレンジ</Link></div>
					<img className='icon-header-dashboard' src={newImg} /><div className='news'><Link to={`/`} className="link">&nbsp;&nbsp;&nbsp;&nbsp;お知らせ</Link></div>

					<UnopDropdown trigger={<div className='option'>
						<img id="menuIcon" onClick={()=>displayClose()} style={{ height: "30px", marginTop: "-7.5px" }} src={menuImg} />
						<img id="closeIcon" onClick={()=>displayMenu()} style={{ height: "30px", marginTop: "-7.5px", display:"none" }} src={closeImg} />
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
					{/* </div> */}
				</CardHeader>



				<CardBody>
					<Switch>
						<Route path="/home">
							<Dashboard />
						</Route>
						<Route path="/myrecords">
							<MyRecord />
						</Route>
						<Route path="/challenge">
							<Column />
						</Route>
						<Route path="/">
							<Dashboard />
						</Route>
					</Switch>
				</CardBody>
				<Card >
					<div className='footer' style={{ backgroundColor: "#414141", height: "128px" }}>
						<div className='footer-item'>会員登録</div>
						<div className='footer-item'>運営会社</div>
						<div className='footer-item'>利用規約</div>
						<div className='footer-item'>個人情報の取扱について</div>
						<div className='footer-item'>特定商取引法に基づく表記</div>
						<div className='footer-item'>お問い合わせ</div>
					</div>
				</Card>
			</Card>
		</div>
	);
};

export default DashboardPage;
