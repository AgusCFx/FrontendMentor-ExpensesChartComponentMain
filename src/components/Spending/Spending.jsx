import React from 'react'
import { StatsMonth } from './StatsMonth'
import { StatsWeek } from './StatsWeek'
import './Spending.css'

export const Spending = () => {
  return (
    <div className='spendingContainer'>
      <h2 className='spendingContainer__title firstText sizeText1'>Spending - Last 7 days</h2>
      <StatsWeek />
      <StatsMonth />
    </div>
  )
}
