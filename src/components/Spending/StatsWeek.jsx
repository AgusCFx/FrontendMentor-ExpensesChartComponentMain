import React, { useState } from 'react'
import data from './../../assets/data.json'

export const StatsWeek = () => {
  return (
    <div className='statsWeekContainer'>
      {data.map((data) =>
        <Bar data={data}/>
      )}
    </div>
  )
}
const Bar = ({data}) =>{
  const [visible, setVisible] = useState(false)
  const today = new Date().toDateString().substring(0,3).toLocaleLowerCase();
  return(
    <div 
      className='statsWeekContainer__dayStats'
      key={data.day}>
      {visible && <p className='dayStatsAmount sizeText2'>${data.amount}</p>}
      <div 
        className={data.day === today ? 'dayStatsBar dayStatsBar--active' : 'dayStatsBar'}
        style={{height: data.amount*3}}
        onMouseEnter={()=>setVisible(true)}
        onMouseLeave={()=>setVisible(false)}>
      </div>
      <p className='dayStatsDate sizeText2'>{data.day}</p>
    </div>
  )
}