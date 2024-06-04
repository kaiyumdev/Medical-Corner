import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const GithubLogin = () => {
  const {githubLogin} = useAuth();
  const handleGoogleSingIn = () => {
    githubLogin()
  }
  return (
    <button onClick={handleGoogleSingIn} className='btn w-full'>
       <div className='flex items-center gap-2'>
       <FaGithubSquare />
       <p>Github</p>
       </div>
        </button>
  )
}

export default GithubLogin