import React from 'react'
import "../css/dashboard.css"
import { Card, CardBody} from 'reactstrap'

function Column() {
    var text1="魚を食べて頭もカラダも元気に！"
    var text2="知っておきたい魚を食べるメリ知っておきたい魚を食べるメリ"
    var hashtag="#魚料理  #和食  #DHA"
    return (
        <div id='dashboard-body' className='dashboard' style={{ border: "1px solid black" }}>
            <Card style={{ margin: "auto", padding: "0" }}>
                <CardBody style={{margin: "0"}}>
                    <Card>
                        <Card className="grid-container-column1">
                            <div className='column-tem'>
                                <div className='in-column-tem'>
                                    <div className='img-record1'>
                                        <div className='in-img-record1'>

                                            <div className='column-text'>
                                                <div className='b-opt-clm'>RECOMMENDED
                                                    HEALTH</div>
                                                <div className='opt-clm'></div>
                                                <span style={{ color: "#FFFFFF" }}>健康</span>
                                            </div>
                                            {/* <div className='column-text-btn'>自分の日記</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column-tem'>
                                <div className='in-column-tem'>
                                    <div className='img-record1'>
                                        <div className='in-img-record1'>

                                            <div className='column-text'>
                                                <div className='b-opt-clm'>RECOMMENDED
                                                    HEALTH</div>
                                                <div className='opt-clm'></div>
                                                <span style={{ color: "#FFFFFF" }}>健康</span>
                                            </div>
                                            {/* <div className='column-text-btn'>自分の日記</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column-tem'>
                                <div className='in-column-tem'>
                                    <div className='img-record1'>
                                        <div className='in-img-record1'>

                                            <div className='column-text'>
                                                <div className='b-opt-clm'>RECOMMENDED
                                                    HEALTH</div>
                                                <div className='opt-clm'></div>
                                                <span style={{ color: "#FFFFFF" }}>健康</span>
                                            </div>
                                            {/* <div className='column-text-btn'>自分の日記</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column-tem'>
                                <div className='in-column-tem'>
                                    <div className='img-record1'>
                                        <div className='in-img-record1'>

                                            <div className='column-text'>
                                                <div className='b-opt-clm'  >RECOMMENDED
                                                    HEALTH</div>
                                                <div className='opt-clm'></div>
                                                <span style={{ color: "#FFFFFF" }}>健康</span>
                                            </div>
                                            {/* <div className='column-text-btn'>自分の日記</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Card>
                </CardBody>
                <CardBody style={{ width: "83.5%", maxHeight: "315px", padding: "0% 7.5% 33% 8.25%" }}>
                    <Card>
                        <Card className="grid-container-column">
                            <div className="grid-itemc">
                                <div className='c1'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                            <div className="grid-itemc">
                                <div className='c2'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                            <div className="grid-itemc">
                                <div className='c3'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                            <div className="grid-itemc">
                                <div className='c4'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                            <div className="grid-itemc">
                                <div className='c5'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                            <div className="grid-itemc">
                                <div className='c6'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                            <div className="grid-itemc">
                                <div className='c7'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                            <div className="grid-itemc">
                                <div className='c8'>
                                    <div className="text-meal">05.21.Morning</div>
                                </div>
                                <div className='text-clm'>{text1}<br />{text2}</div>
                                <div className='hashtag'>{hashtag}</div>
                            </div>
                        </Card>
                    </Card>
                    <div style={{ width: '100%' }}>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <div className='btn-clm'>
                                <p style={{ padding: "15px" }}>自分の日記をもっと見る</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Column