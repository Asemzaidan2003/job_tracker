import { FaGithub , FaPlusSquare } from "react-icons/fa"
import BlurButton from "./BlurButton"
import Model from "./Model"
import Card from "./Card"
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
          handleClick={() => alert("This button will redirect you to the GitHub repository.")}
        />
        <BlurButton
          text="Buy me a coffee"
          icon={<FaPlusSquare className="text-secondary" />}
          blurColor="secondary"
          borderColor="secondary"
          bg_color="surface"
          handleClick={() => setModel(true)}
        />
      </div>
    </div>
    {model && 
      <Model setModel={setModel}>
        <h1>hi from coffee</h1>
      </Model>
    }
    </>
  )
}

export default Navbar