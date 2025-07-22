import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Bean from "./components/Bean"
import TextInput from "./components/TextInput"
import OptionsList from "./components/OptionsList"
import Table from "./components/Table"
import { FaSearch , FaPlusSquare} from "react-icons/fa"
import Button from "./components/Button"
import Model from "./components/Model"
import {useState} from 'react'
import { IoMdCloseCircle } from "react-icons/io";
function App() {
const [model , setModel] = useState(false);

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
      {model && 
        <Model setModel={setModel} >
            <div className="flex justify-between">
              <div>
                <h1 className="text-base sm:text-2xl md:text-4xl  font-inter font-bold">Add Application</h1>
              </div>
              <div className="flex w-12 items-center justify-center">
                  <IoMdCloseCircle
                  className="w-6 h-6 sm:w-8 sm:h-8 text-error cursor-pointer hover:text-red-600"
                  size={32}
                  onClick={() => setModel(false)}
                  />
              </div>
            </div>
            <div className="container p-2">
              <div className="grid grid-cols-2 justify-center">
                <Bean 
                  className="sm:w-full"
                  component={<TextInput text="Search Applications" />}
                  icon={<FaSearch className="text-text-secondary" />}
                />
                <Bean 
                  className="sm:w-full"
                  component={<TextInput text="Search Applications" />}
                  icon={<FaSearch className="text-text-secondary" />}
                />
                <Bean 
                  className="sm:w-full"
                  component={<TextInput text="Search Applications" />}
                  icon={<FaSearch className="text-text-secondary" />}
                />
              </div>
            </div>
        </Model>
      }
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
              handleClick={() => setModel(true)}
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
