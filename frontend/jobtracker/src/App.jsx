import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Bean from "./components/Bean"
import TextInput from "./components/TextInput"
import OptionsList from "./components/OptionsList"
import Table from "./components/Table"
import { FaSearch , FaPlusSquare} from "react-icons/fa"
import Button from "./components/Button"

function App() {
const statusList = [
  { value: "All" },
  { value: "Active" },
  { value: "Archived" },
  { value: "Ghosted" },
  { value: "Rejected" },
  { value: "Accepted" },
  { value: "Interview" },
  { value: "Offer" },]

  const sortList = [
    { value: "Oldest" },
    { value: "Newest" },
  ]
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 flex justify-center max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 justify-items-center w-full">
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"All Applications"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {"15"}
            </div>
          </>
          } />
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"All Applications"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {"15"}
            </div>
          </>
          } />
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"All Applications"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {"15"}
            </div>
          </>
          } />
          <Card 
          children={
          <>
            <div className="text-3xl font-semibold mb-2 p-">
              {"All Applications"}
            </div>
            <div className="text-7xl text-text-secondary font-semibold p-3">
              {"15"}
            </div>
          </>
          } />
        </div>
      </div>
      {/* table side */}
      <div className="container mx-auto my-5 flex justify-center">
        <div className="flex justify-center items-center p-4 space-x-1 w-auto flex-wrap sm:space-x-1 sm:justify-between">
            {/* table tools */}
            <Bean 
            className="sm:w-full"
            component={<TextInput text="Search Applications" />}
            icon={<FaSearch className="text-text-secondary" />}
            />
            <Bean 
            text="Status:"
            component={<OptionsList list={statusList} iconColor="text-secondary"/>}

            iconRight={true}
            />
            <Bean 
            text="Sort by: "
            component={<OptionsList list={sortList} iconColor="text-secondary"/>}
            iconRight={true}
            />
            <Button 
              text="Add Application"
              icon={<FaPlusSquare className="text-text-primary" />}
              bg_color="bg-primary"
              handleClick={() => alert("This button will open the form to add a new application.")}
            />
        </div>
      </div>
      <div className="container flex justify-center mx-auto my-5">
        <div>
            {/* table it self */}
            <Card
            children={<Table />}
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
