import {useState} from 'react'
import Card from "../components/Card"
import Bean from '../components/Bean';
import BlurButton from '../components/BlurButton';
import TextInput from '../components/TextInput';
import {API_URL} from "../config"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const handleSignUp = async () => {
  if (!email || !password || !confirmPassword) {
    alert("All fields are required!");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);

      navigate('https://job-tracker-frontend-xlsz.onrender.com/');
    } else {
      alert(data.message || "Sign up failed!");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Sign up failed! Server error.");
  }
};


  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 p-6 sm:p-12`}>
      <Card
        style={{ maxWidth: "550px", width: "100%" }}
        className={`transform transition-all duration-300`}
      >
        <div className="flex justify-between m-4">
          <div>
            <h1 className="text-base sm:text-2xl md:text-4xl  font-inter font-bold">Create a new account</h1>
          </div>
        </div>

        <div className="container my-4 p-2 space-y-3">
          <div className="grid grid-cols-1 gap-3">
            <Bean component={<TextInput text="Email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />} />
            <Bean component={<TextInput text="Password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />} />
            <Bean component={<TextInput text="Confirm Password" name="confirmPassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />} />
          </div>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-6 ">
            <BlurButton text="Create Account" handleClick={handleSignUp}/>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Signup