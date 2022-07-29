import React from 'react'

export const StatsMonth = () => {
  return (
    <div className='statsMonthContainer'>
        <h3 className='statsMonth__totalTitle secondText sizeText2'>
            Total this month
        </h3>
        <div className='statsMonth'>
            <p className='statsMonth__totalNumber firstText sizeText1'>
                $478.33
            </p>
            <div>
                <p className='statsMonth__lastMonthNum firstText'>
                    +2.4%
                </p>
                <h3 className='statsMonth__lastMonthText secondText sizeText2'>
                    from last month
                </h3>
            </div>
        </div>
    </div>
  )
}
