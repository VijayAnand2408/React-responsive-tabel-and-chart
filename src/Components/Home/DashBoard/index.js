import React from 'react'
import Header from './Header'
import RevenueTable from './Table'
import RevenueChart from './Chart'
function Dashboard() {
  return (
    <>
    <Header/>
    <RevenueChart />
    <RevenueTable/>
    </>
  )
}

export default Dashboard