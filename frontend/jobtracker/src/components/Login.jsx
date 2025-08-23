import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from "../components/Card"
import Bean from '../components/Bean';
import BlurButton from '../components/BlurButton';
import TextInput from '../components/TextInput';
import {API_URL} from "../config"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);


        navigate('../App.jsx');
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Login failed! Server error.");
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
            <h1 className="text-base sm:text-2xl md:text-4xl  font-inter font-bold">Login to your account</h1>
          </div>
        </div>

        <div className="container my-4 p-2 space-y-3">
          <div className="grid grid-cols-1 gap-3">
            <Bean component={<TextInput text="Email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />} />
            <Bean component={<TextInput text="Password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />} />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-6 sm:flex-nowrap ">
            <BlurButton text="Login to your account" handleClick={handleLogin} />
            <BlurButton
              text="Create Account"
              blurColor="primary"
              borderColor='primary'
              handleClick={() => navigate('/signup')}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login