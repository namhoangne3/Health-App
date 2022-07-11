import React, { useState } from 'react'
import { Card, CardBody, CardHeader, CardFooter, Col, CardTitle } from 'reactstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { Line, Pie } from "react-chartjs-2";
import "../css/dashboard.css"
import logo from "../img/small_logo.png"
import memoImg from "../img/icon/icon-memo.png"
import challengeImg from "../img/icon/icon-challenge.png"
import newImg from "../img/icon/icon-news.png"
import menuImg from "../img/icon/icon-menu.png"
import border from "../img/border.png"
import hexImg from "../img/hex-bg.png"
import mealImg from "../img/meal.png"
import snackImg from "../img/snack.png"
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables)

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      borderColor: "#FFCC21"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 56],
      fill: false,
      borderColor: "#8FE9D0"
    }
  ]
};
function Dashboard() {

  const [percent, setPercent] = useState(75)
  const [date, setDate] = useState("05/21")

  return (
    <div id='dashboard-body' className='dashboard' style={{ border: "1px solid black" }}>
      
      <Card>

        <CardBody>
          <Col md="8">
            <Card className="card-chart">
              <CardBody style={{ width: "42%" }}>
                <div className='meal'>
                  <img src={border} className="mealImg"></img>
                  <div className="bottom-left">{date}<span className="percent">{percent}%</span></div>
                </div>
              </CardBody>
              <CardBody style={{ width: "58%", maxHeight: "315px" }}>
                <Line
                  data={data}
                  style={{ maxHeight: "315px", backgroundColor: "#2E2E2E" }}
                />
              </CardBody>
            </Card>
            <Card>
              <div style={{ paddingLeft: "17%", paddingRight: "17%", display: "flex" }}>
                <div style={{ width: "25%" }}>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={mealImg} className="meal-icon"></img>
                  <div style={{ width: "10%" }} className="meal-text meal-text-m">Morning</div>
                </div>
                <div style={{ width: "25%" }}>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={mealImg} className="meal-icon"></img>
                  <div style={{ width: "10%" }} className="meal-text meal-text-l">Lunch</div>
                </div>
                <div style={{ width: "25%" }}>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={mealImg} className="meal-icon"></img>
                  <div style={{ width: "10%" }} className="meal-text meal-text-d">Dinner</div>
                </div>
                <div style={{ width: "25%" }}>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={snackImg} className="snack-icon"></img>
                  <div style={{ width: "10%" }} className="meal-text meal-text-s">Snack</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="grid-container">
                <div className="grid-item">
                  <div className='m01'>
                    <div className="text-meal">05.21.Morning</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className='l01'>
                    <div className="text-meal">05.21.Lunch</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className='d01'>
                    <div className="text-meal">05.21.Dinner</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className='s01'>
                    <div className="text-meal">05.21.Snack</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className='m01'>
                    <div className="text-meal2">05.20.Morning</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className='l02'>
                    <div className="text-meal2">05.20.Lunch</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className='d02'>
                    <div className="text-meal2">05.20.Dinner</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className='s02'>
                    <div className="text-meal2">05.20.Snack</div>
                  </div>
                </div>
              </div>
            </Card>
           
          </Col>
        </CardBody>
      </Card>
    </div>
  )
}

export default Dashboard