import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import "../css/dashboard.css"
import record1Img from '../img/画像/MyRecommend-1.jpg'
import record2Img from '../img/画像/MyRecommend-2.jpg'
import record3Img from '../img/画像/MyRecommend-3.jpg'
import { Line } from "react-chartjs-2";

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65, 33, 25, 35, 51, 54, 56],
            fill: true,
            borderColor: "#FFCC21"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 56, 33, 53, 85, 41, 44, 65],
            fill: false,
            borderColor: "#8FE9D0"
        }
    ]
};


const recordText = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
function MyRecord() {

    return (
        <div id='dashboard-body' className='dashboard' style={{ border: "1px solid black" }}>
            <Card style={{ margin: "auto" }}>
                <CardBody>
                    <Card>
                        <Card className="grid-container-record">
                            <Card className='myrecord-tem'>
                                <Card className='in-myrecord-tem'>
                                    <Card className='img-record1'>
                                        <Card className='in-img-record1'>
                                            <img src={record1Img} className="body-record"></img>
                                            <div className='record-text'>BODY RECORD</div>
                                            <div className='record-text-btn'>自分のカラダの記録</div>
                                        </Card>
                                    </Card>
                                </Card>
                            </Card>
                            <Card className='myrecord-tem'>
                                <Card className='in-myrecord-tem'>
                                    <Card className='img-record1'>
                                        <Card className='in-img-record1'>
                                            <img src={record2Img} className="my-exs"></img>
                                            <div className='record-text'>MY EXERCISE</div>
                                            <div className='record-text-btn'>自分の運動の記録</div>
                                        </Card>
                                    </Card>
                                </Card>
                            </Card>
                            <Card className='myrecord-tem'>
                                <Card className='in-myrecord-tem'>
                                    <Card className='img-record1'>
                                        <Card className='in-img-record1'>
                                            <img src={record3Img} className="my-dia"></img>
                                            <div className='record-text'>MY DIARY</div>
                                            <div className='record-text-btn'>自分の日記</div>
                                        </Card>
                                    </Card>
                                </Card>
                            </Card>
                        </Card>
                    </Card>
                </CardBody>
                <CardBody style={{ width: "83.5%", maxHeight: "315px", padding: "0% 7.5% 10% 8.25%" }}>
                    <Card style={{ maxWidth: "100%", display: "flex", backgroundColor: "#414141" }}>
                        <div style={{ fontSize: "15px", fontWeight: "400", padding: "10px", color: "white" }}>BODY <br /> RECORD</div>
                        <div style={{ fontSize: "25px", fontWeight: "400", padding: "10px", color: "white" }}>2021.05.21</div>
                    </Card>
                    <Line
                        data={data}
                        style={{ width: "100%", maxHeight: "315px", backgroundColor: "#414141" }}
                    >
                    </Line>
                </CardBody>
                <CardBody style={{ width: "83.5%", maxHeight: "315px", padding: "0% 7.5% 5% 8.25%" }}>
                    <Card style={{ maxWidth: "100%", display: "flex", backgroundColor: "#414141" }}>
                        <div style={{ fontSize: "15px", fontWeight: "400", padding: "10px", color: "white" }}>BODY <br /> RECORD</div>
                        <div style={{ fontSize: "25px", fontWeight: "400", padding: "10px", color: "white" }}>2021.05.21</div>
                    </Card>
                    <div className="grid-container-mr">
                        <div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div>
                        <div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div><div className="grid-item-mr">
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "7px", padding: "5px 10px 0px 0px" }}>●</span>
                                <div style={{ width: "50%", textAlign: "left", color: "white", fontFamily: 'Hiragino Kaku Gothic Pro', fontSize: "15px", fontWeight: "300" }}>
                                    家事全般（立位・軽い）
                                </div>
                                <div style={{ width: "50%", textAlign: "right", color: "#FFCC21", fontSize: "18px", fontWeight: "400", float: "right" }}>
                                    10 min
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardBody style={{ width: "83.5%", maxHeight: "315px", padding: "0% 7.5% 26% 8.25%" }}>
                    <div style={{ maxWidth: "100%", display: "flex" }}>
                        <div style={{ fontSize: "25px", fontWeight: "400", padding: "10px", color: "Black" }}>MY DIARY</div>
                    </div>
                    <div className="grid-container-md">
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        <div className="grid-item-md">
                            <div style={{ width: "70%", textAlign: "left", padding: "7%", fontSize: "18px", fontWeight: "400", color: "#414141" }}>
                                2021.05.21 <br />
                                23:25
                            </div><br />
                            <div style={{ paddingLeft: "7%", width: "86%", fontFamily: 'Hiragino Kaku Gothic Pro', fontStyle: "normal", fontWeight: "300", fontSize: "12px", lineHeight: "17px" }}>
                                私の日記の記録が一部表示されます。<br />
                                {recordText}
                            </div>
                        </div>
                        
                    </div>
                    <div style={{ width:'100%'}}>
                            <div style={{width:"100%", textAlign:"center"}}>
                                <div style={{margin:"auto", marginTop:"20px", color:"white",
                                borderRadius:"5px", fontSize:"18px", width:"296px", height:"56px", background:"linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)"}}>
                                    <p style={{padding:"15px"}}>自分の日記をもっと見る</p>
                                </div>
                            </div>
                        </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default MyRecord