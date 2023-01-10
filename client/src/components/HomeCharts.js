import React, {useEffect, useState} from 'react'
import { VictoryChart, VictoryCandlestick } from 'victory';
import './global.css'


const Chart = () => {

    const [chart1, setChart1] = useState([])

    useEffect(() => {

        const getData1 = async () => {
            const resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EURUSD&interval=5min&apikey=6XM9CGKSHR8KSCBS`);
            const data = await resp.json();
            const rawmetadata = Object.entries(data)[0]
            console.log(Object.entries(rawmetadata[1]))
            const metadata = Object.entries(rawmetadata[1])
            setChart1(metadata)
            console.log(chart1)
        }
        getData1()
    }, [])

    return (
        <div className='chart-wrapper'>
            <h3>{chart1[1][1]}</h3>
            <VictoryChart>
                <VictoryCandlestick className="chart"
                    candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                    data={[
                        {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
                        {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
                        {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
                        {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
                        {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
                    ]}
                    />
                
            </VictoryChart>
            <VictoryChart>
                <VictoryCandlestick className="chart"
                    candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                    data={[
                        {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
                        {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
                        {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
                        {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
                        {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
                    ]}
                    />
                
            </VictoryChart>
            <VictoryChart>
                <VictoryCandlestick className="chart"
                    candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                    data={[
                        {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
                        {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
                        {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
                        {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
                        {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
                    ]}
                    />
                
            </VictoryChart>
        </div>

    )

}


export default Chart
