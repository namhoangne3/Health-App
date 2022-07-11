import React, { useState } from 'react'
import { Card, CardBody, Col, Button } from 'reactstrap'
import { Line } from "react-chartjs-2";
import "../css/dashboard.css"
import border from "../img/border.png"
import hexImg from "../img/hex-bg.png"
import mealImg from "../img/meal.png"
import snackImg from "../img/snack.png"
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables)

const data = {
  labels: ["6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65, 77, 33, 89, 99, 70, 20],
      fill: true,
      borderColor: "#FFCC21",
      Option
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 56, 44, 66, 76, 20, 66, 77],
      fill: false,
      borderColor: "#8FE9D0"
    }
  ],
  options: {
    plugins: {
       legend: {
          display: false
       }
    }
  }
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
                <Card className='meal'>
                  <img src={border} className="mealImg"></img>
                  <div className="bottom-left">{date}<span className="percent">{percent}%</span></div>
                </Card>
              </CardBody>
              <CardBody style={{ width: "58%", maxHeight: "315px" }}>
                <Line
                  data={data}
                  style={{ maxHeight: "315px", backgroundColor: "#2E2E2E" }}
                />
              </CardBody>
            </Card>
            <Card>
              <Card style={{ paddingLeft: "17%", paddingRight: "17%", display: "flex", marginBottom:"17px" }}>
                <Card className='item-meal'>
                  <div style={{width:"100%"}}>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={mealImg} className="meal-icon"></img>
                  <div className="meal-text meal-text-m">Morning</div>
                  </div>
                </Card>
                <Card className='item-meal'>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={mealImg} className="meal-icon"></img>
                  <div className="meal-text meal-text-l">Lunch</div>
                </Card>
                <Card className='item-meal'>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={mealImg} className="meal-icon"></img>
                  <div className="meal-text meal-text-d">Dinner</div>
                </Card>
                <Card className='item-meal'>
                  <img src={hexImg} className="hexbg"></img>
                  <img src={snackImg} className="snack-icon"></img>
                  <div className="meal-text meal-text-s">Snack</div>
                </Card>
              </Card>
            </Card>
            <Card>
              <Card className="grid-container">
                <Card className="grid-item">
                  <div className='m01'>
                    <div className="text-meal">05.21.Morning</div>
                  </div>
                </Card>
                <Card className="grid-item">
                  <div className='l01'>
                    <div className="text-meal">05.21.Lunch</div>
                  </div>
                </Card>
                <Card className="grid-item">
                  <div className='d01'>
                    <div className="text-meal">05.21.Dinner</div>
                  </div>
                </Card>
                <Card className="grid-item">
                  <div className='s01'>
                    <div className="text-meal">05.21.Snack</div>
                  </div>
                </Card>
                <Card className="grid-item">
                  <div className='m01'>
                    <div className="text-meal2">05.20.Morning</div>
                  </div>
                </Card>
                <Card className="grid-item">
                  <div className='l02'>
                    <div className="text-meal2">05.20.Lunch</div>
                  </div>
                </Card>
                <Card className="grid-item">
                  <div className='d02'>
                    <div className="text-meal2">05.20.Dinner</div>
                  </div>
                </Card>
                <Card className="grid-item">
                  <div className='s02'>
                    <div className="text-meal2">05.20.Snack</div>
                  </div>
                </Card>
              </Card>
            </Card>
            <Card>
              <div style={{ padding:"3.5%", display: "flex" }}>
                <div style={{ width: "100%", textAlign:"center" }}>
                  <Button className='btn_dashboard'>記録をもっと見る</Button>
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