import React, {useEffect, useState} from 'react'
import { VictoryChart, VictoryCandlestick } from 'victory';
import './global.css'

const Chart = () => {

    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')

    useEffect(() => {

        // Fetch de las 3 divisas del home y creación de gráficos en tiempo real
        
        const getData1 = async () => {
            const resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EURUSD&interval=5min&apikey=6XM9CGKSHR8KSCBS`);
            const data = await resp.json();
            const metadata = Object.entries(data)[1]
            const values = await Object.entries(metadata[1])

            // Fechas, recorrer el primer array 
            // console.log(values)
            // console.log(values[0])
            // console.log(values[0][0])

            // Obtener un array con el string de fechas y horas
            const axisX = []

            values.forEach(e => {
                axisX.push(e[0])
            });

            // Separar fecha y hora para representar horas únicamente
            const datetime = []
            axisX.forEach(e => {
                datetime.push(e.split(" "))
            });
            
            // Crea un array con todas las horas listas para ser representadas
            const time = []
            datetime.forEach( e=> {
                time.push(e[1])
            })

            // Acceder a un valor del array de fechas
            // console.log(axisX[2])


            // Iterar el array de values para obtener datos de cada vela
            // console.log(values)
            const pricedata = []

            values.forEach( e=> {
                pricedata.push(e[1])
            })

            const price = []

            pricedata.forEach( e=> {
                price.push(Object.entries(e))
            })

            setData1([time,price])
        }

        const getData2 = async () => {
            const resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GBPUSD&interval=5min&apikey=6XM9CGKSHR8KSCBS`);
            
            const data = await resp.json();
            const metadata = Object.entries(data)[1]
            const values = await Object.entries(metadata[1])

            const axisX = []

            values.forEach(e => {
                axisX.push(e[0])
            });

          
            const datetime = []
            axisX.forEach(e => {
                datetime.push(e.split(" "))
            });
            
    
            const time = []
            datetime.forEach( e=> {
                time.push(e[1])
            })

            const pricedata = []

            values.forEach( e=> {
                pricedata.push(e[1])
            })

            const price = []

            pricedata.forEach( e=> {
                price.push(Object.entries(e))
            })

            setData2([time,price])
        }

        const getData3 = async () => {
            const resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NZDUSD&interval=5min&apikey=6XM9CGKSHR8KSCBS`);

            const data = await resp.json();
            const metadata = Object.entries(data)[1]
            const values = await Object.entries(metadata[1])

            const axisX = []

            values.forEach(e => {
                axisX.push(e[0])
            });

          
            const datetime = []
            axisX.forEach(e => {
                datetime.push(e.split(" "))
            });
            
    
            const time = []
            datetime.forEach( e=> {
                time.push(e[1])
            })

            const pricedata = []

            values.forEach( e=> {
                pricedata.push(e[1])
            })

            const price = []

            pricedata.forEach( e=> {
                price.push(Object.entries(e))
            })

            setData3([time,price])


        }
        getData1()
        getData2()
        getData3()
    }, [])


    return (
        <div className='chart-wrapper'>
            
            <div className='chart' key={1}>
                <h3 className='currency-title'>EUR/USD</h3>
                
                {data1.length ?
                <VictoryChart>
                    
                    {data1[0].map((e, index) => (
                        
                        <VictoryCandlestick className="candle"
                        candleColors={{positive: "#c43a31", negative: "#63d168" }}
                        candleWidth={4}
                        data={[
                            {x: e, open: +data1[1][index][0][1], close: +data1[1][index][3][1], high: +data1[1][index][1][1], low: +data1[1][index][2][1]},
        
                        ]} 

                        />
                    ))}
                </VictoryChart> : <><div class="lds-ring"><div></div><div></div><div></div></div><div><p>Cargando...</p></div></>
                    
                }
               
            </div>
            
            <div className='chart' key={2}>
                <h3 className='currency-title'>GBP/USD</h3>
                {data2.length ?
                <VictoryChart>
                    
                    {data2[0].map((e, index) => (
                        
                        <VictoryCandlestick className="candle"
                        candleColors={{positive: "#c43a31", negative: "#63d168" }}
                        candleWidth={4}
                        data={[
                            {x: e, open: +data2[1][index][0][1], close: +data2[1][index][3][1], high: +data2[1][index][1][1], low: +data2[1][index][2][1]}
        
                        ]} 

                        />
                    ))}
                </VictoryChart> : <><div class="lds-ring"><div></div><div></div><div></div></div><div><p>Cargando...</p></div></>
                    
                }
            </div>

            <div className='chart' key = {3}>
                <h3 className='currency-title'>NZD/USD</h3>
                {data3.length ?
                <VictoryChart>
                    
                    {data3[0].map((e, index) => (
                        
                        <VictoryCandlestick className="candle"
                        candleColors={{positive: "#c43a31", negative: "#63d168" }}
                        candleWidth={4}
                        data={[
                            {x: e, open: +data3[1][index][0][1], close: +data3[1][index][3][1], high: +data3[1][index][1][1], low: +data3[1][index][2][1]}
        
                        ]} 

                        />
                    ))}
                </VictoryChart> : <><div class="lds-ring"><div></div><div></div><div></div></div><div><p>Cargando...</p></div></>
                    
                }
            </div>
        </div>

    )

}


export default Chart
