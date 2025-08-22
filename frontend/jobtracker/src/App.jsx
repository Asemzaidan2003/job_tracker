import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Table from "./components/Table"
import {useState , useEffect} from 'react'
import {fetchAllAplications , fetchRejectedApplications , fetchNoResponseApplications , fetchSuccessRate} from "../services/analyticsService.js"


function App() {

const [allApplications , setAllApplications] = useState(0);
const [rejectedApplications , setRejectedApplications] = useState(0);
const [noResponse , setNoResponse] = useState(0);
const [successRate , setSuccessRate] = useState(0);


  const getAnalytics = async () => {
    const allApps = await fetchAllAplications();
    const rejectedApps = await fetchRejectedApplications();
    const noResponseApps = await fetchNoResponseApplications();
    const successRate = await fetchSuccessRate();
    setAllApplications(allApps);
    setRejectedApplications(rejectedApps);
    setNoResponse(noResponseApps);
    setSuccessRate(successRate);
  };

useEffect(() => {
  getAnalytics();
}, []);


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 flex justify-center max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 justify-items-center w-full">
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"All Applications"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {allApplications}
            </div>
          </>
          } />
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"Rejected Applications"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {rejectedApplications}
            </div>
          </>
          } />
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"No Response"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {noResponse}
            </div>
          </>
          } />
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"SuccessRate"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {"% "}{successRate}
            </div>
          </>
          } />
        </div>
      </div>
      {/* table side */}
      <div className="container flex justify-center mx-auto my-5">
        <div>
            {/* table it self */}
            <Card
            children={<Table  getAnalyticsOnStatusChange = {getAnalytics}/>}
            style={{
              padding: "0px 0px 0px 0px",
            }}
            />
        </div>
        <div>
            {/* table pagination */}
        </div>
      </div>

    </>
  )
}

export default App
