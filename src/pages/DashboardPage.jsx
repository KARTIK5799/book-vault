import React from 'react'
import DashCard from '../components/DashCard'

const DashboardPage = () => {
  return (
    <div>
        <div className="dashboard-cards-section w-full flex flex-col md:flex-row gap-5">
            <DashCard text={"Total Books"} number={12}  />
             <DashCard text={"Available"} number={12}  />
                  <DashCard text={"Issued"} number={12}  />
                       <DashCard text={"Genres"} number={12}  />
        </div>    
    </div>
  )
}

export default DashboardPage
