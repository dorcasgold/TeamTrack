import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, provider } from '../firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/employeelist');
    } catch (error) {
      window.alert(`Error signing up: ${error.message}`);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/employeelist');
    } catch (error) {
      window.alert(`Error signing in: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/employeelist');
    } catch (error) {
      window.alert(`Error signing in with Google: ${error.message}`);
    }
  };

  return (
    <div className="bg-deepblue font-sans text-gray-200 h-screen w-full flex items-center justify-center">
      <div className="bg-lightblue py-4 rounded-sm flex flex-col px-4 w-1/3 justify-center">
        <div className='text-2xl font-semibold flex flex-col items-center my-4 gap-4'>
          <p>Welcome to TeamTrack</p>
          {isSigningUp ? <p>Sign up</p> : <p>Sign In</p>}
        </div>
        <div className='flex flex-col my-3 gap-2 items-baseline mx-3'>
          <p className='font-semibold'>Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 m-2 border border-slate-600 rounded w-full outline-none text-white bg-deepblue"
          />
        </div>
        <div className='flex flex-col my-3 gap-2 items-baseline mx-3'>
          <p className='font-semibold'>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 m-2 border border-slate-600 rounded w-full outline-none text-white bg-deepblue"
          />
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex gap-3 my-4 bg-white font-semibold text-black mx-4 py-2 text-lg cursor-pointer hover:bg-slate-800 hover:text-white active:bg-white transition duration-700 items-center justify-center"
        >
          <FcGoogle />
          <p>Continue with Google</p>
        </div>
        {isSigningUp ? (
          <div
            onClick={handleSignUp}
            className="bg-slate-800 cursor-pointer mx-4 font-semibold my-4 py-2 text-lg text-center hover:bg-white hover:text-slate-800 transition duration-700"
          >
            <p>Sign Up</p>
          </div>
        ) : (
          <div
            onClick={handleSignIn}
            className="bg-slate-800 cursor-pointer mx-4 font-semibold my-4 py-2 text-lg text-center hover:bg-white hover:text-slate-800 transition duration-700"
          >
            <p>Sign In</p>
          </div>
        )}
        {isSigningUp ? (
          <div onClick={() => setIsSigningUp(!isSigningUp)} className="text-center">
            <p>
              Already have an account? <span className="underline cursor-pointer">Sign In</span>
            </p>
          </div>
        ) : (
          <div onClick={() => setIsSigningUp(!isSigningUp)} className="text-center">
            <p>
              Don't have an account? <span className="underline cursor-pointer">Sign Up</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
