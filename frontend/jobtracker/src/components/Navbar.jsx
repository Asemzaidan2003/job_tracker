import { FaGithub , FaPlusSquare } from "react-icons/fa"
import BlurButton from "./BlurButton"
import Model from "./Model"
import ApplicationForm from "../components/ApplicationForm"
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react"
const Navbar = () => {
  const [model , setModel] = useState(false)
  return (
    <>
    <div className="flex justify-between items-center p-4 bg-surface">
      <div>
        {/* logo */}
        <h1 className="text-base sm:text-2xl md:text-4xl text-center font-inter font-bold">Job Tracker</h1>
      </div>
      <div className="flex space-x-1 sm:space-x-3 md:space-x-6">
        {/* navigation links */}
        <BlurButton
          text="Back to GitHub"
          icon={<FaGithub className="text-secondary" />}
          blurColor="secondary"
          borderColor="secondary"
          bg_color="surface"
          handleClick={() => window.open("https://github.com/Asemzaidan2003/job_tracker", "_blank")}
        />
        <BlurButton 
          text="Add Application"
          icon={<FaPlusSquare className="text-secondary" />}
          bg_color="bg-primary"
          handleClick={() => setModel(true)}
        />
      </div>
    </div>
      {model && 
        <Model setModel={setModel} >
            <div className="flex justify-between m-4">
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
            <div className="container my-4 p-2 space-y-3">
              <ApplicationForm />
            </div>
        </Model>
      }
    </>
  )
}

export default Navbar