import React,{useEffect} from 'react'
import {useSelector } from 'react-redux'
import { useNavigate  } from "react-router-dom";
import Dashboard from './DashBoard';
function Home() {
  const {userName} = useSelector(state => state.user);
  const navigate = useNavigate ();

  useEffect(() => {
    if(userName === '' || !userName) return navigate('/')
  }, [])
  
  return (
    <><Dashboard/></>
  )
}

export default Home