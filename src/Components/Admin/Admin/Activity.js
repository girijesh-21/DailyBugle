import React from 'react'
import Chart from './Chart'
import RecentUpload from './RecentUpload'
import '../Admin/Admincss/Chart.css'

export default function Activity() {
  return (
    <div className='activity'>
      <Chart/>
      <RecentUpload/>
      {/* <TopComments/> */}
    </div>
  )
}
